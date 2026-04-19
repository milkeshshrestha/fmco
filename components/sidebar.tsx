"use client";
import {
  ActivityIcon,
  AlignLeftIcon,
  AnchorIcon,
  ArrowBigUp,
  ArrowBigUpIcon,
  BaggageClaimIcon,
  BookCheckIcon,
  BookIcon,
  BookTextIcon,
  ChartCandlestickIcon,
  ChartLineIcon,
  ChevronRight,
  ChevronsUpDown,
  FileTextIcon,
  GalleryHorizontalEndIcon,
  HandCoinsIcon,
  Home,
  Layers2Icon,
  LayersIcon,
  ListFilterIcon,
  ListIcon,
  ListPlusIcon,
  ListStartIcon,
  MountainIcon,
  Plus,
  PlusIcon,
  ReceiptIcon,
  SendIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Menu items.
const items = [
  {
    groupName: "",
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    groupName: "Shareholder",
    icon: UserIcon,
    submenuItems: [
      {
        title: "Create Shareholder",
        url: "/shareholder/create",
        icon: Plus,
      },
      {
        title: "Upload Shareholders",
        url: "/shareholder/upload",
        icon: ArrowBigUpIcon,
      },
      {
        title: "List Shareholders",
        url: "/shareholder",
        icon: ListIcon,
      },
    ],
  },
  {
    groupName: "Share",
    icon: ChartLineIcon,
    submenuItems: [
      {
        title: "Transfer Share",
        url: "/share/transfer",
        icon: SendIcon,
      },
      {
        title: "List Transction History",
        url: "/share-history",
        icon: GalleryHorizontalEndIcon,
      },
      {
        title: "Upload Share",
        url: "/share/upload/new",
        icon: ArrowBigUpIcon,
      },
      {
        title: "List Past Uploads",
        url: "/share/upload",
        icon: LayersIcon,
      },
      {
        title: "Remaining Shares",
        url: "/share",
        icon: ListIcon,
      },
      {
        title: "Remaining Shares On",
        url: "/share/on",
        icon: ListStartIcon,
      },
    ],
  },
  {
    groupName: "Dividend",
    icon: HandCoinsIcon,
    submenuItems: [
      {
        title: "Dividend Balance",
        url: "/dividend/balance",
        icon: AnchorIcon,
      },
      {
        title: "Upload Dividend",
        url: "/dividend/upload/new",
        icon: ListPlusIcon,
      },
      {
        title: "Create Single Transfer",
        url: "/dividend/single/create",
        icon: PlusIcon,
      },
      {
        title: "List Dividends (upload)",
        url: "/dividend/upload",
        icon: ListFilterIcon,
      },
      {
        title: "List Dividends (singles)",
        url: "/dividend/single",
        icon: AlignLeftIcon,
      },
      {
        title: "List Dividends (All)",
        url: "/dividend",
        icon: ListIcon,
      },
    ],
  },
  {
    groupName: "Trade",
    icon: ChartCandlestickIcon,
    submenuItems: [
      {
        title: "Create Security",
        url: "/trade/security/create",
        icon: PlusIcon,
      },
      {
        title: "View Security List",
        url: "/trade/security",
        icon: AlignLeftIcon,
      },
      {
        title: "Record/View Transaction",
        url: "/trade/transaction/daily",
        icon: PlusIcon,
      },
      // {
      //   title: "Summary By Date",
      //   url: "/trade/transaction/bydate",
      //   icon: BookIcon,
      // },
      {
        title: "Transaction History",
        url: "/trade/transaction/history",
        icon: BookCheckIcon,
      },
      {
        title: "Transn History (+Wacc)",
        url: "/trade/transaction/historyWithWacc",
        icon: BaggageClaimIcon,
      },
    ],
  },
  {
    groupName: "Trade Reports",
    icon: ActivityIcon,
    submenuItems: [
      // {
      //   title: "Gain By Date",
      //   url: "/trade/transaction/gain/bydate",
      //   icon: FileTextIcon,
      // },
      {
        title: "Gain By Security",
        url: "/trade/transaction/gain/bysecurity",
        icon: BookTextIcon,
      },
      {
        title: "Gain By Security (NFRS)",
        url: "/trade/transaction/gain/bysecurity/bynfrs",
        icon: BookTextIcon,
      },
      {
        title: "Security Balance",
        url: "/trade/security/balance/bysecurity",
        icon: LayersIcon,
      },
      {
        title: "Security Balance (NFRS)",
        url: "/trade/security/balance/bynfrs",
        icon: Layers2Icon,
      },
    ],
  },
  {
    groupName: "Users",
    icon: SmileIcon,
    submenuItems: [
      {
        title: "Add User",
        url: "/user/create",
        icon: PlusIcon,
      },
      {
        title: "List Users",
        url: "/user",
        icon: ListIcon,
      },
    ],
  },
];

export function AppSidebar() {
  const { isMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="">
              <Link href={"/"} className="flex items-center gap-2">
                <div className="bg-green-800 p-1  rounded-md">
                  <MountainIcon className="!size-4 text-white" />{" "}
                </div>
                <span className="group-data-[collapsed=true]:hidden">
                  <div className="flex flex-col py-5 gap-1 leading-none inline-block">
                    <p className=" pb-1">Share Register</p>
                    <p className=" text-[10px]">FMCO</p>
                  </div>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((menuItem) =>
              menuItem.groupName !== "" ? (
                <Collapsible
                  defaultOpen={false}
                  key={menuItem.groupName}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger
                      className="w-full"
                      render={
                        <SidebarMenuButton className="group">
                          <menuItem.icon />
                          <span>{menuItem.groupName}</span>
                          <ChevronRight className="ms-auto transition-transform duration-200 group-aria-[expanded=true]:rotate-90" />
                        </SidebarMenuButton>
                      }
                    ></CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-gray-300 dark:border-gray-600">
                        {menuItem.submenuItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              render={
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              }
                            ></SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={menuItem.title}>
                  <SidebarMenuButton>
                    <Link
                      href={menuItem.url || "#"}
                      className="flex items-center gap-2"
                    >
                      <menuItem.icon className="h-5 w-5 shrink-0" />

                      <span className="group-data-[collapsed=true]:hidden">
                        {menuItem.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ),
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
