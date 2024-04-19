"use client";

import { TDrawerItem } from "@/types";
import { Box, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

// type
type TItemProps = {
  item: TDrawerItem;
};

const SidebarItem = ({ item }: TItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={item.path}>
      <ListItem
        disablePadding
        sx={{
          ":hover": {
            background: "transparent",
          },
          ...(pathname === item.path
            ? {
                color: "#1586FD",
                "& svg": { color: "#1586FD" },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            <span>{item.title}</span>
          </Box>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
