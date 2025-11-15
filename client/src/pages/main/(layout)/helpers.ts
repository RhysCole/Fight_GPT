import { type ISidebarMenuItem } from "./components/SidebarMenuItem";

interface MenuState {
  viewInsights: boolean;
  fightId: number | null;
}

export const getAdminMenuItems = (state: MenuState): ISidebarMenuItem[] => [
  {
    id: "upcomingFights",
    icon: "lucide--monitor-dot",
    label: "Upcoming Fights",
    children: [
      {
        id: "upcomingFightsDashboard",
        label: "DashBoard",
        url: "/upcoming/dashboards",
      },
      {
        id: "preFight",
        label: "Pre Fight Overview",
        url: `/upcoming/preFight`,
        badges: ["UWU"],
        disabled: !state.viewInsights,
      },
    ],
  },
  {
    id: "pastFights",
    icon: "lucide--alarm-clock-check",
    label: "Past Fights",
    children: [
      {
        id: "pastFightsDashboard",
        label: "DashBoard",
        url: "/past/dashboards",
      },
      {
        id: "postFight",
        label: "Post Fight Overview",
        url: `/past/postFight`,
      }
    ]
  },
  {
    id: "fighters",
    icon: "lucide--zap",
    label: "Fighters",
    children: [
      {
        id: "fightersDashboard",
        label: "DashBoard",
        url: "/fighters/dashboards",
      },
      {
        id: "fighters",
        label: "Fighters",
        url: "/fighters/fighters",
      },
    ],
  },
  {
    id: "community",
    icon: "lucide--person-standing",
    label: "Community",
    children: [
      {
        id: "myCommunities",
        label: "My Communities",
        url: "/community/myCommunities",
      },
      {
        id: "ActiveCommunities",
        label: "Active Communities",
        url: "/community/activeCommunities",
      },
      {
        id: "leaderboard",
        label: "Leaderboard",
        url: "/community/leaderboard",
      }
    ]
  }

];

const findItem = (
  menuItems: ISidebarMenuItem[],
  url: string
): ISidebarMenuItem | null => {
  for (const item of menuItems) {
    if (item.url == url) {
      return item;
    }
    if (item.children) {
      const fItem = findItem(item.children, url);
      if (fItem) {
        return fItem;
      }
    }
  }
  return null;
};

export const getActivatedItemParentKeys = (
  menuItems: ISidebarMenuItem[],
  url: string
): string[] => {
  const menuItem = findItem(menuItems, url);

  if (!menuItem) return [];
  const list = [];

  for (const item of menuItems) {
    if (item.id == menuItem.id) {
      list.push(item.id);
    }
    if (item.children) {
      for (const iItem of item.children) {
        if (iItem.id == menuItem.id) {
          list.push(item.id);
          list.push(iItem.id);
        }
        if (iItem.children != null) {
          for (const i2Item of iItem.children) {
            if (i2Item.id == menuItem.id) {
              list.push(item.id);
              list.push(iItem.id);
              list.push(i2Item.id);
            }
          }
        }
      }
    }
  }
  return list;
};
