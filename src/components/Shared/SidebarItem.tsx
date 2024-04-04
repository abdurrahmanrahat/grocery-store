import { TDrawerItem } from "@/types";
import { Box, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Link from "next/link";

// type
type TItemProps = {
  item: TDrawerItem;
};

const SidebarItem = ({ item }: TItemProps) => {
  return (
    <Link href={item.path}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {/* <ListItemText primary={item.title} /> */}
            <span>{item.title}</span>
          </Box>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
