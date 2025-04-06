"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
export default function ThemeSwitchButton() {
  const { setTheme } = useTheme();
  return (
    <MenubarMenu>
      <MenubarTrigger>
        <div>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </div>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
        <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
        <MenubarItem onClick={() => setTheme("system")}>System</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
}
