import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string({ message: "Username must be string" })
    .min(1, { message: "Login name is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
