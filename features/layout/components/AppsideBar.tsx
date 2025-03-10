"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/features/shared/ui/sidebar";
import { UifryLogo } from "@/features/shared/ui/UifryLogo";
import { Separator } from "@/features/shared/ui/separator";
import { cn } from "@/lib/utils";
import { primaryNav, secondaryNav } from "@/constants";
import { UserProfileAvatar } from "./UserProfileAvatar";

const NAV_ITEM_STYLES = {
  base: `
    h-9 gap-4 p-3 px-4 
    fill-foreground stroke-foreground
    hover:fill-sidebar-accent-foreground hover:stroke-sidebar-accent-foreground
    active:fill-sidebar-accent-foreground active:stroke-sidebar-accent-foreground
    data-[active=true]:fill-sidebar-accent-foreground data-[active=true]:stroke-sidebar-accent-foreground
    data-[state=open]:hover:fill-sidebar-accent-foreground data-[state=open]:hover:stroke-sidebar-accent-foreground
    transition-colors duration-200
  `,
  active: `
    text-sidebar-accent-foreground bg-sidebar-accent 
    fill-sidebar-accent-foreground stroke-sidebar-accent-foreground
  `,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const renderNavItem = React.useCallback(
    (item: { title: string; url: string; icon: React.ComponentType }) => {
      const isActive = pathname === item.url;
      const Icon = item.icon;

      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link
              href={item.url}
              className={cn(
                NAV_ITEM_STYLES.base,
                isActive && NAV_ITEM_STYLES.active
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    },
    [pathname]
  );

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <UifryLogo />
      </SidebarHeader>

      <SidebarContent>
        {/* Primary Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{primaryNav.map(renderNavItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator
          orientation="horizontal"
          className="my-4 h-px bg-[#4B4B99] w-full"
        />

        {/* Secondary Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{secondaryNav.map(renderNavItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserProfileAvatar />
      </SidebarFooter>
    </Sidebar>
  );
}
