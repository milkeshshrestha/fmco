"use client";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListShares from "./ListShares";
import { Prisma, ShareTransferHistory } from "@prisma/client";
import ShareHistoryComponent from "./shareHistory";
import WaccHistoryComponent from "./waccHistory";
import ShareTransferHistoryComponent from "./shareTransferHistory";
import DividendHistoryComponent from "./dividendHistoryOfShareholder";
type ShareholderInformation = Prisma.ShareholderGetPayload<{
  include: {
    dividend: true;
    share: true;
    shareHistory: { include: { shareTransferHistory: true } };
    waccHistory: true;
  };
}>;
export default async function ShareholderInformation({
  shareholderInformation,
}: {
  shareholderInformation: ShareholderInformation;
}) {
  //todo
  const sth = shareholderInformation.shareHistory
    .filter((t) => !!t.shareTransferHistory)
    .map((th) => th.shareTransferHistory) as ShareTransferHistory[];

  return (
    <>
      <div className="pb-4">
        <CardTitle>Shareholder detail</CardTitle>
        <CardDescription>
          Detail of {shareholderInformation.name} (
          {shareholderInformation.number})
        </CardDescription>
      </div>
      <Tabs defaultValue="shareDetail" className="">
        <TabsList className="">
          <TabsTrigger value="shareDetail">Share detail</TabsTrigger>
          <TabsTrigger value="shareHistory">Share Statement</TabsTrigger>
          <TabsTrigger value="waccHistory">WACC Calc</TabsTrigger>
          <TabsTrigger value="transferHistory">Transfers</TabsTrigger>
          <TabsTrigger value="dividendHistory">Dividend</TabsTrigger>
        </TabsList>
        <div className="w-full">
          <TabsContent value="shareDetail">
            <ListShares shares={shareholderInformation.share} />
          </TabsContent>
          <TabsContent value="shareHistory">
            <ShareHistoryComponent
              shareHistoryList={shareholderInformation.shareHistory}
            />
          </TabsContent>
          <TabsContent value="waccHistory">
            <WaccHistoryComponent
              waccHistoryList={shareholderInformation.waccHistory}
            />
          </TabsContent>
          <TabsContent value="transferHistory">
            <ShareTransferHistoryComponent
              shareHistoryList={shareholderInformation.shareHistory.filter(
                (t) => !!t.shareTransferHistory
              )}
            />
          </TabsContent>
          <TabsContent value="dividendHistory">
            <DividendHistoryComponent
              dividendHistory={shareholderInformation.dividend}
            />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
