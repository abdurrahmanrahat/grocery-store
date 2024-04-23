"use client";

import { useGetAllOrdersFishesFromDbQuery } from "@/redux/api/ordersApi";
import { getUserInfo } from "@/services/auth.services";
import { TOrder } from "@/types";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Orders || Dashboard",
};

const MyOrders = () => {
  // get user info
  const userInfo = getUserInfo();
  //   console.log(userInfo?.email);

  const { data: orders } = useGetAllOrdersFishesFromDbQuery({
    email: userInfo?.email,
  });
  //   console.log(orders);

  return (
    <Container
      sx={{
        margin: "32px 0px",
      }}
    >
      <div className="mb-12">
        <h2 className="text-[28px] font-semibold text-[#010937]">My Orders</h2>
        <div className="h-[2px] w-[150px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
      </div>

      {/* table */}
      <div className="overflow-hidden overflow-x-auto">
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#ddd",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Items
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Quantity
              </TableCell>

              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Price
              </TableCell>

              <TableCell
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders?.data?.map((fish: TOrder) => (
              <TableRow key={fish._id}>
                <TableCell
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src={fish.image[0]}
                      width={80}
                      height={80}
                      alt={fish.title}
                      className="rounded-md"
                    />
                  </Box>
                  <span className="text-[14px] md:text-[16px] font-medium">
                    {fish.title}
                  </span>
                </TableCell>
                <TableCell>{fish.quantity}</TableCell>
                <TableCell>{fish.price}</TableCell>
                <TableCell>
                  <span
                    className={`${
                      fish.status === "Pending"
                        ? "bg-[#c62828] py-[8px] px-[16px] rounded-[50px] text-white"
                        : "bg-[#0095CF] py-[8px] px-[16px] rounded-[50px] text-white"
                    } w-[100px]`}
                  >
                    {fish.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default MyOrders;
