import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "./data/userData";
import { LoginSchema } from "./zod.schema/loginSchema";
import bcrypt from "bcryptjs";
//this is required because prisma is not directly supported by authjs edge comatibility
//see https://authjs.dev/guides/edge-compatibility
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      credentials: {
        username: { type: "text" },
        password: {},
      },
    }),
  ],
} satisfies NextAuthConfig;
