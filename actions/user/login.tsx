"use server";

import { LoginSchema } from "@/zod.schema/loginSchema";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validationResponse = LoginSchema.safeParse(values);
  if (!validationResponse.success) {
    return { success: false, error: "Invalid Credentials" };
  } else {
    const { username, password } = validationResponse.data;
    try {
      await signIn("credentials", {
        username,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      //console.log(error);
      if (error instanceof AuthError) {
        return { success: false, error: "Invalid Credentials!" };
      }
      throw error;
    }
  }
};
export default loginAction;
