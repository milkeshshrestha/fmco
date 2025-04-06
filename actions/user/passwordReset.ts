"use server";
import { getUserById } from "@/data/userData";
import { prisma } from "@/prisma/client";
import bcrypt from "bcryptjs";
import { notFound } from "next/navigation";
const passwordResetAction = async (id: number) => {
  const user = getUserById(id);
  if (!user) return notFound();
  const hashedPassword = await bcrypt.hash("123456", 10);
  await prisma.user.update({
    where: { id },
    data: { password: hashedPassword, requirePasswordChange: true },
  });
  //todo
  //logout the user
};
export default passwordResetAction;
