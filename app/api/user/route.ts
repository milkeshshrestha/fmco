import { getAllUsers } from "@/data/userData";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json({ data: users }, { status: 200 });
}
