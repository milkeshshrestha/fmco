import {
  AlignLeftIcon,
  ArrowBigUp,
  ArrowBigUpIcon,
  ChartLineIcon,
  ChevronRight,
  GalleryHorizontalEndIcon,
  HandCoinsIcon,
  Home,
  LayersIcon,
  ListFilterIcon,
  ListIcon,
  ListPlusIcon,
  ListStartIcon,
  MountainIcon,
  Plus,
  PlusIcon,
  SendIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

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
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <div className="bg-green-800 p-1 rounded-md">
                  <MountainIcon className="!size-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Share Register</span>
                  <span className="">FMCO</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((menuItem) =>
                menuItem.groupName !== "" ? (
                  <Collapsible
                    defaultOpen={false}
                    key={menuItem.groupName}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <menuItem.icon />
                          <span>{menuItem.groupName}</span>
                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-gray-300 dark:border-gray-600">
                          {menuItem.submenuItems?.map((submenuItem) => (
                            <SidebarMenuSubItem key={submenuItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={submenuItem.url}>
                                  <submenuItem.icon />
                                  <span>{submenuItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={menuItem.title}>
                    <SidebarMenuButton asChild>
                      <a href={menuItem.url}>
                        <menuItem.icon />
                        <span>{menuItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
