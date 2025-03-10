import {
  AnalyticsIcon,
  DashboardIcon,
  HelpIcon,
  SettingsIcon,
  UserIcon,
  WalletIcon,
} from "@/features/shared/icons";

const primaryNav = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Analytics",
    url: "#",
    icon: AnalyticsIcon,
  },
  {
    title: "My Wallet",
    url: "/dashboard/wallet",
    icon: WalletIcon,
  },
  {
    title: "Accounts",
    url: "#",
    icon: UserIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
];

const secondaryNav = [
  {
    title: "Help centre",
    url: "#",
    icon: HelpIcon,
  },
];

export { primaryNav, secondaryNav };
