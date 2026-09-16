import { tabIcons } from "./icons";

export const tabs = [
  { name: "index", title: "Home", icon: tabIcons.home },
  { name: "subscriptions", title: "Subscriptions", icon: tabIcons.wallet },
  { name: "insights", title: "Insights", icon: tabIcons.dataExploration },
  { name: "settings", title: "Settings", icon: tabIcons.settings },
] as const;