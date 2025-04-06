/**
 * An array of routes that are accessible to public
 * these dont require authentication
 * ^\/$: Matches the root URL /.
 * ^\/user\/create$: Matches the exact URL /user/create.
 * ^\/auth\/change-password\/: Matches any URL that starts with /auth/change-password/.
 */
export const publicRoutes = /^\/user\/create$|^\/auth\/change-password\//;

/**
 * An array of routes that are used for authentication
 * these route will redirect logged in user to / home page
 */
export const authRoutes = ["/auth/login", "/auth/register"];
/**
 * prefix for authentication routes
 */
export const apiAuthPrefix = "/api/auth";
export const DEFAULT_LOGIN_REDIRECT = "/";
