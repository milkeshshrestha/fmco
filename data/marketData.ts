"use server";
import { SecurityBalanceWithClassification } from "@/services/transactionDetail";
import {
  BASE_URL,
  createHeaders,
  nepseAxios,
  nepseClient,
  SecurityDetail,
} from "nepse-api-helper";

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
  const marketData = await getMarketDataFromAverageHistoryAsOn(date);

  const unavailableSecurities = [
    ...new Set(
      securitiesData
        .filter(
          (item) =>
            !marketData.data.some(
              (mktItem) => mktItem.symbol === item.securityShortName
            )
        )
        .map((item) => item.securityShortName)
    ),
  ];
  //console.log("unavailableSecurities", unavailableSecurities);

  const fetchedSecurities =
    unavailableSecurities.length === 0
      ? { data: [] }
      : await getMarketDataForGivenSecuritiesOneByOneUsingPriceHistoryAsOn(
          date,
          unavailableSecurities
        );
  // console.log("fetchedSecurities", fetchedSecurities);
  const combinedResults = marketData.data.concat(fetchedSecurities.data);
  //console.log("combinedResults", combinedResults);
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
// export async function getClosingPrice(
//   date: Date
// ): Promise<{ success: boolean; message: string; data: CsvRow[] }> {
//   const url = `https://omitnomis.github.io/ShareSansarScraper/Data/${date
//     .toISOString()
//     .split("T")[0]
//     .replaceAll("-", "_")}.csv`;
//   //console.log(url);
//   const response = await fetch(url, {
//     method: "get",
//   });
//   if (!response.ok) {
//     // Here response.status will be 404, 500, etc.
//     console.error(`Error: ${response.status} ${response.statusText}`);
//     // you can throw an error if you want
//     return { success: false, message: "Error fetching market data", data: [] };
//   }
//   const data = await response.text();
//   //console.log(data);
//   const jsonD = csvToJson(data);
//   //const f = jsonD.find((d) => d["Symbol"] === "NABIL");
//   //console.log(f?.["Close"]);
//   return { success: true, message: "", data: jsonD };
//   //
//   // console.log(resp);
// }
type MarketDataResponse = {
  success: boolean;
  message: string;
  data: {
    symbol: string;
    closePrice: number;
    [key: string]: string | number;
  }[];
};

async function getLastTransactionDateOfNepse(date: Date): Promise<Date> {
  await nepseClient.initialize({ useWasm: true });
  const token = await nepseClient.getToken();
  //first try with a sample security to find the nearest transaction date
  const detail = await nepseClient.getSecurityDetail("ADBL");
  //console.log("detail ", detail);
  //get first transaction date
  let transactionDate = new Date(date);
  let res;
  do {
    res = await nepseAxios.get(
      `${BASE_URL}/api/nots/market/security/price/${detail.id}?&businessDate=${
        transactionDate.toISOString().split("T")[0]
      }`,
      { headers: createHeaders(token) }
    );
    transactionDate.setDate(transactionDate.getDate() - 1);
  } while (res.data.content.length == 0);
  transactionDate.setDate(transactionDate.getDate() + 1);
  //console.log("using transaction date:", transactionDate);
  return transactionDate;
}
type ResponseCustom = {
  content: { security: { symbol: string }; closePrice: number }[];
};
async function getMarketDataForGivenSecuritiesOneByOneUsingPriceHistoryAsOn(
  date: Date,
  securitiesSymbols: string[]
): Promise<MarketDataResponse> {
  await nepseClient.initialize({ useWasm: true });
  const token = await nepseClient.getToken();
  console.log("trying one by one fetch for securities:", securitiesSymbols);
  try {
    const transactionDate = await getLastTransactionDateOfNepse(date);
    const responseAll = await Promise.all(
      securitiesSymbols.map(async (symbol) => {
        //console.log("s fetching market data for:" + symbol);
        try {
          const securityDetail = await nepseClient.getSecurityDetail(symbol);
          const securityPriceHistoryAsOn: ResponseCustom = (
            await nepseAxios.get(
              `${BASE_URL}/api/nots/market/security/price/${
                securityDetail.id
              }?&businessDate=${transactionDate.toISOString().split("T")[0]}`,
              { headers: createHeaders(token) }
            )
          ).data as ResponseCustom;

          //console.log("fetched data 1 by 1 for :" + symbol); //, securityPriceHistoryAsOn);
          return securityPriceHistoryAsOn;
        } catch (err) {
          //console.error("Error fetching data for symbol:" + symbol);
          return {
            content: [
              {
                security: { symbol: symbol },
                closePrice: NaN,
              },
            ],
          } as ResponseCustom;
        }
        // console.log(
        //   "fetched market data for:" + symbol,
        //   securityPriceHistoryAsOn.data
        // );
      })
    );
    return {
      success: true,
      message: "Fetch success",
      data: responseAll.map((item) => {
        return {
          symbol: item.content[0].security.symbol,
          closePrice: item.content[0].closePrice,
        };
      }),
    };
  } catch (err: any) {
    //console.error("Error fetching market data:", err);
    return {
      success: false,
      message: "Error fetching market data",
      data: [],
    };
  }
}

async function getMarketDataFromAverageHistoryAsOn(date: Date): Promise<{
  success: boolean;
  message: string;
  data: {
    symbol: string;
    closePrice: number;
    [key: string]: string | number;
  }[];
}> {
  console.log("getting current market rate as on date:", date);
  //at first before anything, call initialize() on nepseClient. This is required to get the deobsfucation logic for token.
  await nepseClient.initialize({ useWasm: true });
  //console.log("nepseClient initialized");
  //if you want to make your own custom API call for a function that isn't defined in this library, you can just get the token first
  const token = await nepseClient.getToken();
  console.log("token", token);
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
  const transactionDate = await getLastTransactionDateOfNepse(date);
  console.log("using transaction date for average fetch:", transactionDate);
  const dateString = transactionDate.toISOString().split("T")[0];
  const fetchUrl = `${BASE_URL}/api/nots/nepse-data/trading-average?nDays=180&businessDate=${dateString}`;
  console.log("fetching market data from url:", fetchUrl);
  try {
    const response = await nepseAxios.get(
      fetchUrl,
      //"https://nepalstock.com/api/nots/nepse-data/today-price",
      //"/api/nots/securityDailyTradeStat/58",
      { headers: createHeaders(token) }
    );
    const data = await response.data;
    console.log("Average data as on " + dateString, data.slice(0, 1));
    return { success: true, message: "", data: data };
  } catch (err: any) {
    // Here response.status will be 404, 500, etc.
    //console.error(`Error: ${response.status} ${response.statusText}`);
    // you can throw an error if you want
    return { success: false, message: "Error fetching market data", data: [] };
  }
  //console.log(response);
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
