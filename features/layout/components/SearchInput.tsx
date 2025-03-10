import React from "react";
import { Search } from "lucide-react";
import { Input } from "../../shared/ui/input";

export const SearchInput: React.FC = () => {
  return (
    <div className="hidden md:block self-end">
      <div className="relative">
        <Input
          className="bg-foreground border-none pl-4 pr-10 py-2 md:w-[360px] rounded-lg focus:ring-2 focus:ring-purple-500 placeholder:text-[#AEABD8]"
          placeholder="Search for anything..."
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
      </div>
    </div>
  );
};
