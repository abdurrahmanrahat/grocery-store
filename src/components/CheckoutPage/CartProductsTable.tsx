"use client";

import { useGetAllCartFishesFromDbQuery } from "@/redux/api/cartFishApi";
import { TCartFish } from "@/types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

const CartProductsTable = () => {
  const { data: cartFishes } = useGetAllCartFishesFromDbQuery({});

  return (
    <div className="col-span-12 md:col-span-6 overflow-hidden overflow-x-auto h-[460px] overflow-y-scroll">
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
          </TableRow>
        </TableHead>

        <TableBody>
          {cartFishes?.data?.map((fish: TCartFish) => (
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
                    width: "auto",
                    height: "auto",
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
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {fish.title}
                </Box>
              </TableCell>
              <TableCell>{fish.quantity}</TableCell>
              <TableCell>{fish.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartProductsTable;
