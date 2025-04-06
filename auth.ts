import NextAuth, { type DefaultSession } from "next-auth";
import prisma from "./prisma/client";
import Credentials from "next-auth/providers/credentials";
import { getUserById, getUserByUsername } from "./data/userData";
import { LoginSchema } from "./zod.schema/loginSchema";
import bcrypt from "bcryptjs";
import { User, UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      role: string | {};
      requirePasswordChange: boolean;
    } & DefaultSession["user"];
  }
  interface User {
    role: string | {};
    requirePasswordChange: boolean;
  }
}
//this is required because prisma is not directly supported by authjs edge comatibility
//see https://authjs.dev/guides/edge-compatibility
// Notice this is only an object, not a full Auth.js instance

export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 30 * 60, updateAge: 5 * 60 }, //30 min
  callbacks: {
    async signIn({ user }) {
      //the user is the one returned from authorize function
      //console.log("this is user inside signin callback:" + typeof user);
      //console.log(user);
      if (user.requirePasswordChange) {
        return `/auth/change-password/${user.id}`;
      } else {
        return true;
      }
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.role = token.role as string | {};
      }
      //add role to session object too
      if (token.role && session.user) session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
  },
  providers: [
    Credentials({
      credentials: {
        username: { type: "text" },
        password: {},
      },
      async authorize(credentials): Promise<any> {
        const validationResponse = LoginSchema.safeParse(credentials);
        if (validationResponse.success) {
          const { username, password } = validationResponse.data;
          const user = (await getUserByUsername(username)) as User;
          if (!user) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch)
            return {
              id: user.id.toString(),
              name: user.name,
              role: user.role.toString(),
              requirePasswordChange: user.requirePasswordChange,
            };
          return null;
        }
      },
    }),
  ],
});
