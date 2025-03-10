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
      <SidebarInset className="p-10 relative overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
