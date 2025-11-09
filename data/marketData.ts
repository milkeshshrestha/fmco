import { SecurityBalanceWithClassification } from "@/services/transactionDetail";
import {
  BASE_URL,
  createHeaders,
  nepseAxios,
  nepseClient,
} from "nepse-api-helper";
import { fetchWithRetry } from "nepse-api-helper/dist/http";
import { symbol } from "zod";

export async function getClosingPriceForSecurities(
  date: Date,
  securitiesData: SecurityBalanceWithClassification[]
): Promise<{
  success: boolean;
  message: string;
  data: SecurityBalanceWithClassification[];
}> {
  const marketData = await getMarketPrice(date, securitiesData);
  if (!marketData.success) {
    return {
      success: false,
      message: marketData.message,
      data: securitiesData,
    };
  } else {
    //console.log("marketData", marketData.data);
    const securitiesWithMarketData = securitiesData.map((s) => {
      const marketInfo = marketData.data.find(
        //symbol used for current date price and Symbol for historical date price
        (m) =>
          m.symbol === s.securityShortName || m.Symbol === s.securityShortName
      );
      return {
        ...s,
        closingMarketRate: marketInfo ? marketInfo.closePrice : 0,
        closingMarketValue: marketInfo
          ? marketInfo.closePrice * s.remainingQuantity
          : 0,
      };
    });
    return { success: true, message: "", data: securitiesWithMarketData };
  }
}
async function getMarketPrice(
  date: Date,
  securitiesData: SecurityBalanceWithClassification[]
) {
  const today = new Date().toISOString().split("T")[0];
  // if (date.toISOString().split("T")[0] === today) {
  //   const marketData = await getCurrentMarketRate();
  //   return marketData;
  // } else {
  //   const marketData = await getClosingPrice(date);
  //   return marketData;
  // }
  const marketData = await getMarketDataAsOn(date);

  const unavailableSecurities = [
    ...new Set(securitiesData.map((item) => item.securityShortName)),
  ];
  const fetchedSecurities = await getMarketDateForGivenSecuritiesAsOn(
    date,
    unavailableSecurities
  );
  return {
    success: true,
    message: "",
    data: [...marketData.data, ...fetchedSecurities.data],
  };
}
type CsvRow = {
  symbol: string;
  close: number | undefined;
  closePrice: number;
  [key: string]: string | number | undefined;
};
export async function getClosingPrice(
  date: Date
): Promise<{ success: boolean; message: string; data: CsvRow[] }> {
  const url = `https://omitnomis.github.io/ShareSansarScraper/Data/${date
    .toISOString()
    .split("T")[0]
    .replaceAll("-", "_")}.csv`;
  //console.log(url);
  const response = await fetch(url, {
    method: "get",
  });
  if (!response.ok) {
    // Here response.status will be 404, 500, etc.
    console.error(`Error: ${response.status} ${response.statusText}`);
    // you can throw an error if you want
    return { success: false, message: "Error fetching market data", data: [] };
  }
  const data = await response.text();
  //console.log(data);
  const jsonD = csvToJson(data);
  //const f = jsonD.find((d) => d["Symbol"] === "NABIL");
  //console.log(f?.["Close"]);
  return { success: true, message: "", data: jsonD };
  //
  // console.log(resp);
}
type MarketDataResponse = {
  success: boolean;
  message: string;
  data: {
    symbol: string;
    closePrice: number;
    [key: string]: string | number;
  }[];
};

async function getMarketDateForGivenSecuritiesAsOn(
  date: Date,
  securitiesSymbols: string[]
): Promise<MarketDataResponse> {
  await nepseClient.initialize({ useWasm: false });
  const token = await nepseClient.getToken();

  try {
    const detail = await nepseClient.getSecurityDetail(securitiesSymbols[0]);
    //console.log("detail ", detail);
    //get first transaction date
    let transactionDate = new Date(date);
    let res;
    do {
      res = await nepseAxios.get(
        `${BASE_URL}/api/nots/market/security/price/${
          detail.id
        }?&businessDate=${transactionDate.toISOString().split("T")[0]}`,
        { headers: createHeaders(token) }
      );
      // console.log("fetched market data for :" + securitiesSymbols[0], res.data);
      // console.log(
      //   "content length:" + securitiesSymbols[0],
      //   res.data.content.length
      // );
      transactionDate.setDate(transactionDate.getDate() - 1);
    } while (res.data.content.length == 0);
    transactionDate.setDate(transactionDate.getDate() + 1);
    console.log("using transaction date:", transactionDate);
    const response = [] as unknown as {
      content: { security: { symbol: string }; closePrice: number }[];
    }[];
    for (const symbol of securitiesSymbols) {
      const securityDetail = await nepseClient.getSecurityDetail(symbol);
      //console.log("securityDetail", securityDetail);
      const securityPriceHistoryAsOn = await nepseAxios.get(
        `${BASE_URL}/api/nots/market/security/price/${
          securityDetail.id
        }?&businessDate=${transactionDate.toISOString().split("T")[0]}`,
        { headers: createHeaders(token) }
      );
      response.push(securityPriceHistoryAsOn.data);
      // console.log(
      //   "fetched market data for:" + symbol,
      //   securityPriceHistoryAsOn.data
      // );
    }

    return {
      success: false,
      message: "Error fetching market data",
      data: response.map((item) => {
        return {
          symbol: item.content[0].security.symbol,
          closePrice: item.content[0].closePrice,
        };
      }),
    };
  } catch (err: any) {
    console.error("Error fetching market data:", err);
    return {
      success: false,
      message: "Error fetching market data",
      data: [],
    };
  }
}

async function getMarketDataAsOn(date: Date): Promise<{
  success: boolean;
  message: string;
  data: {
    symbol: string;
    closePrice: number;
    [key: string]: string | number;
  }[];
}> {
  console.log("getting current market rate");
  //at first before anything, call initialize() on nepseClient. This is required to get the deobsfucation logic for token.
  await nepseClient.initialize({ useWasm: false });
  console.log("nepseClient initialized");
  //if you want to make your own custom API call for a function that isn't defined in this library, you can just get the token first
  const token = await nepseClient.getToken();
  //console.log("token", token);
  //const marketStatus = await nepseClient.getMarketStatus();
  //const bodyId = calculateValidBodyId(marketStatus?.id ?? 0);
  //console.log("calculated bodyId", bodyId);
  //const detail = await nepseClient.getSecurityDetail("NILPO");
  //console.log("detail NILPO", detail);
  //and then you can use this token to call other APIs that you need to like:
  // Make custom API call using Axios
  // const response = await nepseAxios.post(
  //   `${BASE_URL}/api/nots/nepse-data/trading-average?nDays=180&businessDate=${date.toISOString().split("T")[0]}`,
  //   {
  //     headers: createHeaders(token),
  //   }
  // );

  // console.log(responseCustom.data);

  const response = await fetch(
    `${BASE_URL}/api/nots/nepse-data/trading-average?nDays=180&businessDate=${
      date.toISOString().split("T")[0]
    }`,
    //"https://nepalstock.com/api/nots/nepse-data/today-price",
    //"/api/nots/securityDailyTradeStat/58",
    {
      headers: {
        authorization: `Salter ${token}`,
        "content-type": "application/json",
      },
      //body: JSON.stringify({ id: bodyId }),
      //method: "POST",
      method: "Get",
    }
  );
  if (!response.ok) {
    // Here response.status will be 404, 500, etc.
    console.error(`Error: ${response.status} ${response.statusText}`);
    // you can throw an error if you want
    return { success: false, message: "Error fetching market data", data: [] };
  }
  //console.log(response);
  const data = await response.json();
  return { success: true, message: "", data: data };
}

function csvToJson(csv: string): CsvRow[] {
  const lines = csv.trim().split("\n");
  const headers = lines[0].toLowerCase().split(",");

  const resultJson = lines.slice(1).map((line) => {
    const values = line.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index]?.trim() ?? "";
      return obj;
    }, {} as CsvRow);
  });
  return resultJson.map((item) => {
    return { ...item, closePrice: item.close ?? 0 };
  });
}
export function calculateValidBodyId(marketId: number): number {
  const dummyData = [
    147, 117, 239, 143, 157, 312, 161, 612, 512, 804, 411, 527, 170, 511, 421,
    667, 764, 621, 301, 106, 133, 793, 411, 511, 312, 423, 344, 346, 653, 758,
    342, 222, 236, 811, 711, 611, 122, 447, 128, 199, 183, 135, 489, 703, 800,
    745, 152, 863, 134, 211, 142, 564, 375, 793, 212, 153, 138, 153, 648, 611,
    151, 649, 318, 143, 117, 756, 119, 141, 717, 113, 112, 146, 162, 660, 693,
    261, 362, 354, 251, 641, 157, 178, 631, 192, 734, 445, 192, 883, 187, 122,
    591, 731, 852, 384, 565, 596, 451, 772, 624, 691,
  ];
  const datePart = getNepalDatePart();
  return dummyData[marketId] + marketId + 2 * datePart;
}

function getNepalDatePart() {
  const nepalTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
  });
  const nepalDate = new Date(nepalTime);
  return nepalDate.getDate();
}
