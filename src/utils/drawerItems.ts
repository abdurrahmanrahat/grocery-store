import { TDrawerItem } from "@/types";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
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
      title: "All Fishes",
      path: "/dashboard/allproducts",
      icon: LocalMallOutlinedIcon,
    },
    {
      title: "Create Fish",
      path: "/dashboard/create-fish",
      icon: AddCircleOutlineOutlinedIcon,
    },
  ];

  return [...roleMenus];
};
