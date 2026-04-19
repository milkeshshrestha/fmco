import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "@wrksz/themes/next"; // Changed import

export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
