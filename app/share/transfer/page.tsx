"use server ";
import ShareTransferForm from "@/components/shareTransferForm";
import { getAllShareholders } from "@/data/sharedholderData";

export default async function ShareTransferPage() {
  const shareholderList = await getAllShareholders();
  return <ShareTransferForm />;
}
