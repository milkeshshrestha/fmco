"use server";
import prisma from "@/prisma/client";

export const getUserByUsername = async (username: string) => {
  return await prisma.user.findUnique({
    where: { username },
  });
};

export const getUserByUsernameAndPassword = async (
  username: string | undefined,
  password: string | undefined
) => {
  return await prisma.user.findUnique({
    where: { username, password },
  });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const getOneUser = async () => {
  return await prisma.user.findFirst();
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
