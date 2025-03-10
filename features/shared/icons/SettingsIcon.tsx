import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const SettingsIcon = ({ styling }: { styling?: string }) => {
  return <Settings className={cn(styling && styling)} size={20} />;
};

export default SettingsIcon; 