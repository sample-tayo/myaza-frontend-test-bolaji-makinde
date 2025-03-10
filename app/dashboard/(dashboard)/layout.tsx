import type { Metadata } from "next";
import { AppSidebar } from "@/features/layout/components/AppsideBar";
import { SidebarInset, SidebarProvider } from "@/features/shared/ui/sidebar";

export const metadata: Metadata = {
  title: "Uifry | Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-10 relative">{children}</SidebarInset>
    </SidebarProvider>
  );
}
