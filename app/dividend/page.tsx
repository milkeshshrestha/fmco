"use server";

import { getAllDividendWithShareholder } from "@/data/dividend";
import DividendHistoryList from "@/components/dividendList";

export default async function AllDividendHistoryPage() {
  const dividendWithShareholder = await getAllDividendWithShareholder();

  return (
    <div className=" ">
      <DividendHistoryList
        dividendListFromDbWithShareholder={dividendWithShareholder}
        title="Dividend list (upload + single entries)"
      />
    </div>
  );
}
