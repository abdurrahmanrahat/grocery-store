"use client";

import { useGetAllCartFishesFromDbQuery } from "@/redux/api/cartFishApi";
import { getUserInfo } from "@/services/auth.services";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Container } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // get user info
  const userInfo = getUserInfo();

  const AuthButton = dynamic(() => import("@/components/Others/AuthButton"), {
    ssr: false,
  });

  // get cart products with email query
  const query = { email: userInfo?.email };
  const { data: cartFishes } = useGetAllCartFishesFromDbQuery({ ...query });
  // console.log(cartFishes);

  return (
    <div className="bg-gradient-to-r from-[#0094cf1a] to-[#0094cf18] px-4 md:px-0">
      <Container
        sx={{
          padding: "12px 0px",
        }}
      >
        <div className="flex items-center justify-between relative">
          {/* logo section */}
          <Link href="/">
            <h1 className="text-3xl font-bold">
              <span className="text-[#010937]">Fish</span>
              <span className="text-[#0095CF]">Mart</span>
            </h1>
          </Link>

          {/* Nav items section */}
          <ul className="hidden lg:flex space-x-5">
            <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
              <ActiveLink href="/" exact={true}>
                Home
              </ActiveLink>
            </li>
            <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
              <ActiveLink href="/flashsale">Flash Sale</ActiveLink>
            </li>
            <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
              <ActiveLink href="/fish">Fish</ActiveLink>
            </li>
            <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
              <ActiveLink href="/dashboard">Dashboard</ActiveLink>
            </li>
            {/* <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
              <ActiveLink href="/contact">Contact</ActiveLink>
            </li> */}
            <li className="font-medium md:text-[18px]">
              <Badge
                badgeContent={cartFishes?.data?.length || 1}
                color="primary"
                sx={{
                  cursor: "pointer",
                }}
              >
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </li>
          </ul>

          {/* Mobile menu */}
          <div className="lg:hidden">
            {/* toggle open icon */}
            <div onClick={() => setIsOpenMenu(true)}>
              <MenuOutlinedIcon />
            </div>

            {isOpenMenu && (
              <motion.div
              // initial={{ y: -400 }}
              // animate={{ y: 0 }}
              // transition={{ duration: 1.2 }}
              >
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-[#ddd] rounded shadow-sm">
                    {/* logo and close toggle icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link href="/">
                          <h1 className="text-3xl font-bold">
                            <span className="text-[#010937]">Fish</span>
                            <span className="text-[#0095CF]">Mart</span>
                          </h1>
                        </Link>
                      </div>
                      <div onClick={() => setIsOpenMenu(false)}>
                        <CloseOutlinedIcon />
                      </div>
                    </div>

                    {/* mobile nav items */}
                    <nav>
                      <ul className="space-y-2">
                        <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
                          <ActiveLink href="/" exact={true}>
                            Home
                          </ActiveLink>
                        </li>
                        <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
                          <ActiveLink href="/flashsale">Flash Sale</ActiveLink>
                        </li>
                        <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
                          <ActiveLink href="/fish">Fish</ActiveLink>
                        </li>
                        <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
                          <ActiveLink href="/dashboard">Dashboard</ActiveLink>
                        </li>
                        <li className="font-medium md:text-[18px]">
                          <Badge
                            badgeContent={1}
                            color="primary"
                            sx={{
                              cursor: "pointer",
                            }}
                          >
                            <ShoppingCartOutlinedIcon color="action" />
                          </Badge>
                        </li>
                        <AuthButton></AuthButton>
                      </ul>
                    </nav>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          {/* Mobile Navlinks end */}

          {/* auth */}
          <div className="hidden lg:flex">
            <AuthButton></AuthButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
