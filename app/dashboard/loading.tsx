import { Loader2 } from "lucide-react";


export default function DashboardLoading() {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-primary-foreground/50 animate-spin" />
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    </div>
  );
}
