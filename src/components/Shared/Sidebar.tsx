import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Box } from "@mui/material";
import Link from "next/link";
import ActiveLink from "../ui/ActiveLink";

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-r from-[#0094cf1a] to-[#0094cf18] h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 text-primary-text">
      <nav className="flex flex-col gap-2">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[#010937]">Fish</span>
            <span className="text-[#0095CF]">Mart</span>
          </h1>
        </Link>

        <div className="mt-4 space-y-2">
          <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
            <ActiveLink exact href="/dashboard">
              <Box className="flex items-center gap-2">
                <GridViewOutlinedIcon />
                <Box>Dashboard</Box>
              </Box>
            </ActiveLink>
          </div>
          <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
            <ActiveLink href="/dashboard/allproducts">
              <Box className="flex items-center gap-2">
                <LocalMallOutlinedIcon />
                <Box>All Products</Box>
              </Box>
            </ActiveLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
