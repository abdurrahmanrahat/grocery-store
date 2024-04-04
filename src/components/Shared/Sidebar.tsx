import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack } from "@mui/material";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        sx={{
          py: 1,
          mt: 2,
        }}
        component={Link}
        href="/"
      >
        <h1 className="text-3xl font-bold">
          <span className="text-[#010937]">Fish</span>
          <span className="text-[#0095CF]">Mart</span>
        </h1>
      </Stack>

      {/* side link list */}
      <List>
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
