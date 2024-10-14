import {
  PortfolioIcon,
  MessageIcon,
  AnalyticsIcon,
  PackIcon,
  GroupIcon,
  SettingsIcon,
} from "@/assets/icons";
const pathName: string = location.pathname;

export const currentPage = (): string => {
  if (pathName.includes("portfolio")) return "My Portfolio";
  if (pathName.includes("group")) return "My group";
  if (pathName.includes("messages")) return "Messages";
  if (pathName.includes("analytics")) return "Analytics";
  if (pathName.includes("packs")) return "Packs";
  if (pathName.includes("settings")) return "Settings";
  return "My Portfolio";
};

export const navItems = [
  {
    id: 1,
    icon: PortfolioIcon,
    navText: "My Portfolio",
    navUrl: "/main/portfolio",
  },
  {
    id: 2,
    icon: GroupIcon,
    navText: "My Group",
    navUrl: "/main/group",
  },
  {
    id: 3,
    icon: MessageIcon,
    navText: "Messages",
    navUrl: "/main/messages",
  },
  {
    id: 4,
    icon: AnalyticsIcon,
    navText: "Analytics",
    navUrl: "/main/analytics",
  },
  {
    id: 5,
    icon: PackIcon,
    navText: "Packs",
    navUrl: "/main/packs",
  },
  {
    id: 6,
    icon: SettingsIcon,
    navText: "Settings",
    navUrl: "/main/settings",
  },
];
