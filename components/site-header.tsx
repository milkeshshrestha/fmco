import { SidebarTrigger } from "@/components/ui/sidebar";
import { CircleUserRound, MountainIcon } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ThemeSwitchButton from "./themeSwitchButton";
import { auth, signOut } from "@/auth";

export async function SiteHeader() {
  const session = await auth();
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Link href="/" className="visible md:hidden" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
        </Link>
        <SidebarTrigger className="" />

        <div className="ml-auto flex items-center gap-2">
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
                <div className="w-full hover:bg-slate-300/30  relative flex cursor-default select-none  rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/auth/login" });
                    }}
                    className="w-full h-full"
                  >
                    <button type="submit" className="w-full text-left">
                      Sign Out
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
