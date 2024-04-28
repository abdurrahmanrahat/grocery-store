"use client";

import ActiveLink from "@/components/ui/ActiveLink";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="md:hidden relative">
      <div className="bg-gradient-to-r from-[#0094cf1a] to-[#0094cf18] flex justify-between px-10 py-2">
        <div>
          <Link onClick={() => setToggle((prev) => !prev)} href="/">
            <h1 className="text-3xl font-bold">
              <span className="text-[#010937]">Fish</span>
              <span className="text-[#0095CF]">Mart</span>
            </h1>
          </Link>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="block lg:hidden"
        >
          {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>
      </div>

      <div
        className={
          toggle
            ? "fixed lg:hidden top-0 left-0 w-[70%] h-full bg-[#ddd] ease-in-out duration-700 z-[999] p-[20px]"
            : "ease-in-out duration-700 w-[70%] fixed top-0 bottom-0 left-[-100%] z-[999]"
        }
      >
        <div className="mb-5">
          <Link onClick={() => setToggle((prev) => !prev)} href="/">
            <h1 className="text-3xl font-bold">
              <span className="text-[#010937]">Fish</span>
              <span className="text-[#0095CF]">Mart</span>
            </h1>
          </Link>
        </div>

        <div className="mt-4 space-y-2">
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink exact href="/dashboard">
              <div className="flex items-center gap-2">
                <GridViewOutlinedIcon />
                <span className="truncate">Dashboard</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink href="/dashboard/allproducts">
              <div className="flex items-center gap-2">
                <LocalMallOutlinedIcon />
                <span className="truncate">All Fishes</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink href="/dashboard/create-fish">
              <div className="flex items-center gap-2">
                <AddCircleOutlineOutlinedIcon />
                <span className="truncate">Create Fish</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink href="/dashboard/orders-manage">
              <div className="flex items-center gap-2">
                <ManageHistoryOutlinedIcon />
                <span className="truncate">Orders Manage</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink href="/dashboard/my-orders">
              <div className="flex items-center gap-2">
                <BookmarkBorderOutlinedIcon />
                <span className="truncate">My Orders</span>
              </div>
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
