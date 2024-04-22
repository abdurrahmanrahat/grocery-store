import { TDrawerItem } from "@/types";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
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
    {
      title: "My Orders",
      path: "/dashboard/my-orders",
      icon: BookmarkBorderOutlinedIcon,
    },
  ];

  return [...roleMenus];
};
