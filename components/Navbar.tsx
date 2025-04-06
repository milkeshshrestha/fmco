/**
 * v0 by Vercel.
 * @see https://v0.dev/t/obus3LxsAfo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use server";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { CircleUserRound, LogOut, SearchIcon } from "lucide-react";
import { auth, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { useTheme } from "next-themes";
import ThemeSwitchButton from "./themeSwitchButton";
import { SidebarTrigger } from "./ui/sidebar";

export default async function Navbar() {
  const session = await auth();

  const logout = async () => {
    await signOut();
    revalidatePath("/", "layout");
  };
  return (
    <header className=" drop-shadow-xs block border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className=" mx-auto h-12   flex items-center justify-between px-4 md:px-6">
        <div className="flex gap-4">
          <Link
            href="/"
            className=" md:inline visible md:hidden"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
          </Link>
          <SidebarTrigger className="" />
        </div>
        <div className="flex items-center gap-4">
          <Menubar>
            <ThemeSwitchButton />

            <MenubarMenu>
              <MenubarTrigger>
                <CircleUserRound className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="justify-center">
                  <span className=" text-sm font-medium  text-gray-500 text-center capitalize dark:text-gray-500 ">
                    {session!.user.name}
                  </span>
                </MenubarItem>
                <MenubarSeparator />

                <MenubarItem>
                  <Link href={`/auth/change-password/${session!.user.id}`}>
                    Change Password
                  </Link>
                </MenubarItem>
                <div className="w-full hover:bg-slate-300/30  relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                      revalidatePath("/", "layout");
                    }}
                  >
                    <button type="submit" className="">
                      Logout
                    </button>
                  </form>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
