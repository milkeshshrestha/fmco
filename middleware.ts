import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./route";
import { NextRequest } from "next/server";
//to prevent prisma to load in middleware which is not supported
//we separate auth configuration into auth.ts and auth.config.ts
//and load authconfig without prisma here
//configuration without the database adapter and
//instantiate its own Auth.js client.
//see https://authjs.dev/guides/edge-compatibility

const { auth } = NextAuth(authConfig);
export async function middleware(req: NextRequest) {
  const isLoggedIn = await auth();
  const { nextUrl } = req;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.test(nextUrl.pathname);
  const isAuthRoute = authRoutes.some((authRoute) =>
    nextUrl.pathname.startsWith(authRoute)
  );
  if (isApiAuthRoute) {
    return;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return;
}
//this is where middleware is invoked or exlude what is not invoked using matchers,
// this is array, you can add more pattern
//eg: this ignores middleware from running for loading
//images stored in public folder
export const config = {
  matcher: [
    "/",
    "/(api|trpc)(.*)",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
