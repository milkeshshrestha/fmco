// pages/index.tsx
"use server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function Home() {
  const numberOfShares = await prisma.shareholder.aggregate({
    _sum: { ownedUnitsOfShare: true },
  });
  const numberOfShareHolders = await prisma.shareholder.count({
    where: { ownedUnitsOfShare: { gt: 0 } },
  });
  const topShareholders = await prisma.shareholder.findMany({
    orderBy: { ownedUnitsOfShare: "desc" },
    take: 10,
  });
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Card className="">
          <CardHeader>
            <CardDescription>Total Shares</CardDescription>
            <CardTitle className="text-2xl font-semibold ">
              {new Intl.NumberFormat().format(
                numberOfShares._sum.ownedUnitsOfShare ?? 0
              )}
            </CardTitle>
            <CardAction>
              <Link href={"/share"}>
                <Badge variant={"outline"}>View All</Badge>
              </Link>
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardDescription>Total Shareholders</CardDescription>
            <CardTitle className="text-2xl font-semibold ">
              {new Intl.NumberFormat().format(numberOfShareHolders ?? 0)}
            </CardTitle>
            <CardAction>
              <Link href={"/shareholders"}>
                <Badge variant={"outline"}>View All</Badge>
              </Link>
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      <div className="space-y-4">
        <CardTitle>Top 10 Shareholders</CardTitle>
        <Card className="p-0">
          {topShareholders && (
            <Table className="">
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Ctz/ Reg Number</TableHead>
                  <TableHead>Units Owned</TableHead>
                  <TableHead>WACC</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {topShareholders &&
                  topShareholders.map((sh, index) => (
                    <TableRow key={index}>
                      <TableCell>{sh.name}</TableCell>
                      <TableCell>{sh.number}</TableCell>
                      <TableCell>{sh.type}</TableCell>
                      <TableCell>{sh.ctzIssueDateOrRegDate}</TableCell>
                      <TableCell>{sh.ownedUnitsOfShare}</TableCell>
                      <TableCell>{sh.wacc}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </Card>
      </div>
      {/* <section id="home">
        <div className="h-screen flex items-center  bg-linear-to-br from-gray-700 to-slate-800">
          <div className="flex justify-center items-center">
            <img
              src="/images/amc.png"
              alt="investment image"
              className="sm:flex hidden w-4/12 h-auto "
            />
            <div className=" mx-5  sm:w-6/12 sm:text-right sm:justify-self-end">
              <div className=" text-white xl:text-4xl md:text-3xl  sm:text-2xl sm:block hidden text-4xl font-bold ">
                <span>Fund Management Company Ltd.</span>
              </div>
              <h1 className=" text-white block  sm:hidden text-4xl font-bold ">
                Fund Management Company Ltd.
              </h1>
              <div className="h-0.5 w-full mt-3 rounded sm:bg-linear-to-r sm:from-transparent sm:to-blue-500  bg-linear-to-r from-blue-500 to-transparent"></div>

              <br></br>
              <div className=" ">
                <p className="text-slate-400 text-sm ">Estd: 2010</p>
                <p className="text-slate-400 leading-relaxed ">
                  A public limited company has been established as a subsidiary
                  of Agricultural Development Bank Ltd. (a "A" class licenced
                  institution from Nepal Rastra Bank)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="sm:flex h-[90vh] sm:flex-row gap-5 p-5  justify-center  text-white bg-linear-to-br from-slate-900  to-slate-800 ">
          <div className="sm:w-4/12 bg-slate-800 rounded-lg p-5 ">
            <div className="text-white text-2xl">Read about us</div>
            <hr className="h-px "></hr>
            <div className="pt-5 text-gray-300">
              {downloadList.map((downloadItem) => (
                <div
                  key={downloadItem.url}
                  className="text-sm p-2 hover:font-bold hover:text-gray-200 "
                >
                  <a href={downloadItem.url} target="_blank">
                    {downloadItem.fileName}
                  </a>
                  <hr className="opacity-20"></hr>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-3/12 bg-slate-800 rounded-lg p-5  ">
            <div className="text-white text-2xl">Let's talk</div>
            <hr></hr>
            <div className="text-sm">
              <div className="pt-5 text-sm text-gray-300">
                Meet us at 5th floor of Ratnapark Branch of Agricultural
                Development Bank Nepal, Ratnapark, Kathmandu Nepal
              </div>
              <span>
                <Phone className="text-[#09b9cd] text-sm inline-block " />{" "}
                <span className="text-[#ffda00c9]">9851-222-222</span>
              </span>
              <p>
                <Mail className="text-[#09b9cd] text-sm inline-block" />{" "}
                <span className="text-[#ffda00c9]">fmcl@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="sm:w-4/12 bg-slate-800 rounded-lg p-5 ">
            <div className="text-white text 2xl">
              <div className="text-white text-2xl">Useful links</div>
              <hr></hr>
              <div className="pt-5  ">
                {usefullinks.map((link) => (
                  <div
                    key={link.url}
                    className="text-sm p-2 hover:font-bold hover:text-gray-200 "
                  >
                    <a
                      className="text-sm text-gray-300 hover:text-gray-200"
                      href={link.url}
                      target="_blank"
                    >
                      {link.linkName}
                    </a>
                    <hr className="opacity-20"></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
