import { NextAuthConfig } from "next-auth";
//this is required because prisma is not directly supported by authjs edge comatibility
//see https://authjs.dev/guides/edge-compatibility
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [],
} satisfies NextAuthConfig;
