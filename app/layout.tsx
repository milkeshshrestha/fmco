import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import { cookies } from "next/headers";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
export const metadata: Metadata = {
  title: "Fund Management Co",
  description: "Subsidiary of ADBL",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultSidebarOpen = cookieStore.get("sidebar_state")?.value === "true";
  const session = await auth();
  const isAuthenticated = !!session;
  return (
    <html>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {isAuthenticated ? (
              <SidebarProvider
                defaultOpen={defaultSidebarOpen}
                style={
                  {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                  } as React.CSSProperties
                }
              >
                <AppSidebar />
                <SidebarInset>
                  <SiteHeader />
                  <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-6">
                        {children}
                      </div>
                    </div>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            ) : (
              <div className="flex h-screen items-center justify-center ">
                {children}
              </div>
            )}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
