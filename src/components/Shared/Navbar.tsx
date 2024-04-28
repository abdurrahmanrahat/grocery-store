"use client";

import { useGetAllCartFishesFromDbQuery } from "@/redux/api/cartFishApi";
import { getUserInfo } from "@/services/auth.services";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Container } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

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
        <div className="flex items-center justify-between">
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
              <Link href="/checkout">
                <Badge
                  badgeContent={cartFishes?.data?.length || 1}
                  color="primary"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="block lg:hidden"
          >
            {isOpenMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </div>

          {/* Mobile menu */}
          <div
            className={
              isOpenMenu
                ? "fixed lg:hidden top-0 left-0 w-[70%] h-full bg-[#ddd] ease-in-out duration-700 z-[999] p-[20px]"
                : "ease-in-out duration-700 w-[70%] fixed top-0 bottom-0 left-[-100%] z-[999]"
            }
          >
            {/* logo and close toggle icon */}
            <div className="mb-[12px]">
              <Link href="/">
                <h1 className="text-3xl font-bold">
                  <span className="text-[#010937]">Fish</span>
                  <span className="text-[#0095CF]">Mart</span>
                </h1>
              </Link>
            </div>

            {/* mobile nav items */}
            <nav>
              <ul className="space-y-[6px]">
                <li
                  className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500"
                  onClick={handleNavToggle}
                >
                  <ActiveLink href="/" exact={true}>
                    Home
                  </ActiveLink>
                </li>
                <li
                  className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500"
                  onClick={handleNavToggle}
                >
                  <ActiveLink href="/flashsale">Flash Sale</ActiveLink>
                </li>
                <li
                  className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500"
                  onClick={handleNavToggle}
                >
                  <ActiveLink href="/fish">Fish</ActiveLink>
                </li>
                <li
                  className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500"
                  onClick={handleNavToggle}
                >
                  <ActiveLink href="/dashboard">Dashboard</ActiveLink>
                </li>
                <li
                  className="font-medium md:text-[18px]"
                  onClick={handleNavToggle}
                >
                  <Link href="/checkout">
                    <Badge
                      badgeContent={cartFishes?.data?.length || 1}
                      color="primary"
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                  </Link>
                </li>
                <li onClick={handleNavToggle}>
                  <AuthButton></AuthButton>
                </li>
              </ul>
            </nav>
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
