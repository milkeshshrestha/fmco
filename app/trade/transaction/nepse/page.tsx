import { getClosingPrice } from "@/data/marketData";
import { NepseBuilder } from "@nepse-helper/core";
import { nepseClient } from "nepse-api-helper";
import { createHeaders } from "nepse-api-helper/dist/http";

export default async function Page() {
  const nepse = await NepseBuilder.build();

  //const todayPrice = await nepse.getTodayPrice(1, 500);
  //console.log("nepsebuilder", todayPrice);

  //at first before anything, call initialize() on nepseClient. This is required to get the deobsfucation logic for token.
  await nepseClient.initialize();

  //now you can use the functions that you need. for example

  //this will return a list of all securities including active and inactive, with their status.
  const securities = await nepseClient.getMarketStatus();
  console.log(securities);
  const dummyData = [
    147, 117, 239, 143, 157, 312, 161, 612, 512, 804, 411, 527, 170, 511, 421,
    667, 764, 621, 301, 106, 133, 793, 411, 511, 312, 423, 344, 346, 653, 758,
    342, 222, 236, 811, 711, 611, 122, 447, 128, 199, 183, 135, 489, 703, 800,
    745, 152, 863, 134, 211, 142, 564, 375, 793, 212, 153, 138, 153, 648, 611,
    151, 649, 318, 143, 117, 756, 119, 141, 717, 113, 112, 146, 162, 660, 693,
    261, 362, 354, 251, 641, 157, 178, 631, 192, 734, 445, 192, 883, 187, 122,
    591, 731, 852, 384, 565, 596, 451, 772, 624, 691,
  ];
  let dummyDataId = securities.id;
  let currentDate = new Date();
  let datePart = currentDate.getDate();
  let id = dummyData[dummyDataId] + dummyDataId + 2 * datePart;
  console.log("id", id);
  //if you want to make your own custom API call for a function that isn't defined in this library, you can just get the token first
  const token = await nepseClient.getToken();
  console.log("token", token);
  //console.log("headers", createHeaders(token));
  //and then you can use this token to call other APIs that you need to like:
  const resp = await fetch(
    "https://nepalstock.com/api/nots/securityDailyTradeStat/58",
    {
      headers: {
        authorization: `Salter ${token}`,
        "content-type": "application/json",
      },
      //body: `{"id": ${id}}`,
      method: "Get",
    }
  );
  await getClosingPrice(new Date("2025-09-23"));
  console.log(resp);
  const data = await resp.json();
  console.log(data);
}
