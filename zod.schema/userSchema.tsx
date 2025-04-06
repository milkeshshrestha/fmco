import { getUserById, getUserByUsername } from "@/data/userData";
import prisma from "@/prisma/client";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";

export const ChangePasswordSchema = z
  .object({
    existingPassword: z.string({ message: "Password should be text" }),
    newPassword: z
      .string({ message: "Password should be text" })
      .min(8, "Min length is 8 character")
      .refine((value) => /[a-z|A-Z]/.test(value), {
        message: "Password must contain at least one alphabet",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
    newPasswordConfirm: z
      .string({ message: "Password should be text" })
      .min(8, "Min length is 8 character")
      .refine((value) => /[a-z|A-Z]/.test(value), {
        message: "Password must contain at least one alphabet",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
    id: z.number({ message: "Id is missing." }),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: "New Password not matched",
    path: ["newPasswordConfirm"],
  })
  .refine(
    async (data) => {
      if (!data.id) return false;
      const user = (await getUserById(data.id)) as User;
      if (!user) return false;
      const validPassword = await bcrypt.compare(
        data.existingPassword,
        user.password
      );
      if (validPassword) return true;
      return false;
    },
    {
      message: "Invalid Credential",
      path: ["existingPassword"],
    }
  );
export const userWithDefaultPasswordSchema = z.object({
  name: z
    .string({ message: "Full Name is required" })
    .min(1, { message: "Full Name is required" }),
  username: z
    .string({ message: "Login name is missing." })
    .min(5, { message: "Login name should contain at least 5 character." })
    .refine(
      async (username) => {
        const user = await getUserByUsername(username);
        return !user;
      },
      {
        message: "User with login name already exists.",
      }
    ),
  password: z.optional(z.string()),
  email: z
    .string({ message: "Email is missing." })
    .email("Invalid email address.")
    .refine(
      async (email) => {
        const user = await prisma.user.findUnique({
          where: { email },
        });
        return !user;
      },
      {
        message: "User with email already exists.",
      }
    ),
});
