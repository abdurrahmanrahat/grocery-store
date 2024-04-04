import { TDrawerItem } from "@/types";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const drawerItems = (): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: GridViewOutlinedIcon,
    },
    {
      title: "All Products",
      path: "/dashboard/allproducts",
      icon: LocalMallOutlinedIcon,
    },
  ];

  return [...roleMenus];
};
