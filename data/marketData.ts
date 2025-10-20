import { SecurityBalanceWithClassification } from "@/services/transactionDetail";
import { nepseClient } from "nepse-api-helper";

export async function getClosingPriceForSecurities(
  date: Date,
  securitiesData: SecurityBalanceWithClassification[]
): Promise<{
  success: boolean;
  message: string;
  data: SecurityBalanceWithClassification[];
}> {
  const marketData = await getMarketPrice(date);
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
          m.symbol === s.securityShortName || m.symbol === s.securityShortName
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
async function getMarketPrice(date: Date) {
  if (date === new Date()) {
    const marketData = await getCurrentMarketRate();
    return marketData;
  } else {
    const marketData = await getClosingPrice(date);
    return marketData;
  }
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

async function getCurrentMarketRate(): Promise<{
  success: boolean;
  message: string;
  data: {
    symbol: string;
    closePrice: number;
    [key: string]: string | number;
  }[];
}> {
  //at first before anything, call initialize() on nepseClient. This is required to get the deobsfucation logic for token.
  await nepseClient.initialize();

  //if you want to make your own custom API call for a function that isn't defined in this library, you can just get the token first
  const token = await nepseClient.getToken();
  //console.log("token", token);

  //and then you can use this token to call other APIs that you need to like:
  const response = await fetch(
    "https://nepalstock.com/api/nots/securityDailyTradeStat/58",
    //"https://nepalstock.com/api/nots/nepse-data/today-price",
    {
      headers: {
        authorization: `Salter ${token}`,
        "content-type": "application/json",
      },
      //body: `{"id": ${id}}`,
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
