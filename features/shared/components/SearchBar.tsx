import React from "react";
import { Search } from "lucide-react";
import { Input } from "../../shared/ui/input";

export const SearchInput: React.FC = () => {
  return (
    <div className="hidden md:block w-full max-w-[360px]">
      <div className="relative w-full">
        <Input
          className="bg-primary border-none w-full pl-4 pr-10 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 placeholder:text-[#AEABD8]"
          placeholder="Search for anything..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="text-gray-400 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
