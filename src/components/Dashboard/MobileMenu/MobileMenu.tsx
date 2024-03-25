"use client";

import ActiveLink from "@/components/ui/ActiveLink";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
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

        {/* toggle open icon */}
        <div onClick={() => setToggle((prev) => !prev)}>
          <MenuOutlinedIcon />
        </div>
      </div>

      {toggle && (
        <motion.nav
          initial={{ x: -200, scale: 0.7, opacity: 0.6 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-2 bg-white p-8 absolute top-2 w-full text-primary-text z-[999]"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <Link onClick={() => setToggle((prev) => !prev)} href="/">
                <h1 className="text-3xl font-bold">
                  <span className="text-[#010937]">Fish</span>
                  <span className="text-[#0095CF]">Mart</span>
                </h1>
              </Link>
            </div>
            <div onClick={() => setToggle((prev) => !prev)}>
              <CloseOutlinedIcon />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink exact href="/dashboard">
                <div className="flex items-center gap-2">
                  <GridViewOutlinedIcon />
                  <span className="truncate">Dashboard</span>
                </div>
              </ActiveLink>
            </p>
            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink href="/dashboard/allproducts">
                <div className="flex items-center gap-2">
                  <LocalMallOutlinedIcon />
                  <span className="truncate">All Products</span>
                </div>
              </ActiveLink>
            </p>
          </div>
        </motion.nav>
      )}
    </div>
  );
};

export default MobileMenu;
