import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/features/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/features/shared/ui/dropdown-menu";
import {
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Shield,
  CreditCard,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import USER_AVATAR from "@/public/assets/avatars/user-avatar.png";

type MenuItem = {
  icon: LucideIcon;
  label: string;
  shortcut?: string;
  danger?: boolean;
};

const MENU_ITEMS: Record<string, MenuItem> = {
  PROFILE: {
    icon: User,
    label: "Profile",
    shortcut: "⇧⌘P",
  },
  BILLING: {
    icon: CreditCard,
    label: "Billing",
    shortcut: "⌘B",
  },
  SETTINGS: {
    icon: Settings,
    label: "Settings",
    shortcut: "⌘S",
  },
  NOTIFICATIONS: {
    icon: Bell,
    label: "Notifications",
  },
  HELP_CENTER: {
    icon: HelpCircle,
    label: "Help Center",
  },
  PRIVACY: {
    icon: Shield,
    label: "Privacy & Security",
  },
  LOGOUT: {
    icon: LogOut,
    label: "Logout",
    shortcut: "⇧⌘Q",
    danger: true,
  },
};

enum UserStatus {
  ONLINE = "online",
  AWAY = "away",
  BUSY = "busy",
  OFFLINE = "offline",
}

const STATUS_COLORS: Record<UserStatus, string> = {
  [UserStatus.ONLINE]: "bg-green-500",
  [UserStatus.AWAY]: "bg-amber-500",
  [UserStatus.BUSY]: "bg-red-500",
  [UserStatus.OFFLINE]: "bg-gray-400",
};

const STYLES = {
  menuItem:
    "flex cursor-pointer items-center gap-2 py-2 transition-colors duration-200",
  menuItemDefault: "hover:bg-background/10",
  menuItemDanger: "text-red-500 hover:text-red-600 hover:bg-red-50",
};

export const UserProfileAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userStatus = UserStatus.ONLINE;

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const renderMenuItem = useCallback((item: MenuItem) => {
    const { icon: Icon, label, shortcut, danger } = item;
    return (
      <DropdownMenuItem
        key={label}
        className={cn(
          STYLES.menuItem,
          danger ? STYLES.menuItemDanger : STYLES.menuItemDefault
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
        {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
    );
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "flex items-center gap-3 w-full justify-between p-2 rounded-lg group",
            "hover:bg-primary/10 transition-colors duration-200"
          )}
          aria-label="User profile menu"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-3 w-full justify-start">
            <div className="relative h-10 w-10">
              {/* User avatar */}
              <Image
                src={USER_AVATAR}
                alt="Ali Riaz's profile avatar"
                fill
                className={cn(
                  "rounded-full object-cover border-2 border-transparent",
                  "group-hover:border-primary-foreground transition-all duration-300"
                )}
                priority
              />

              {/* Status indicator */}
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
                  STATUS_COLORS[userStatus]
                )}
                aria-hidden="true"
              />
            </div>

            {/* User Info */}
            <div className="text-left">
              <p className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                Ali Riaz
              </p>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                Web Developer
              </p>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-gray-500 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 p-2 bg-background animate-slide-down"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">Ali Riaz</p>
            <p className="text-xs text-muted-foreground truncate">
              aliRiaz@example.com
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {renderMenuItem(MENU_ITEMS.PROFILE)}
          {renderMenuItem(MENU_ITEMS.BILLING)}
          {renderMenuItem(MENU_ITEMS.SETTINGS)}
          {renderMenuItem(MENU_ITEMS.NOTIFICATIONS)}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {renderMenuItem(MENU_ITEMS.HELP_CENTER)}
          {renderMenuItem(MENU_ITEMS.PRIVACY)}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {renderMenuItem(MENU_ITEMS.LOGOUT)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
