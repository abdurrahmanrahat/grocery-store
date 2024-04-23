"use client";

import {
  useGetAllOrdersFishesFromDbQuery,
  useUpdateOrderFishIntoDbMutation,
} from "@/redux/api/ordersApi";
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
import toast from "react-hot-toast";

export const metadata: Metadata = {
  title: "Order Management || Dashboard",
};

const OrdersManagementPage = () => {
  const { data: orders } = useGetAllOrdersFishesFromDbQuery({});

  const [updateOrderFishIntoDb] = useUpdateOrderFishIntoDbMutation();

  const handleStatusChange = async (fish: TOrder) => {
    const updatedStatus = fish.status === "Pending" ? "Delivered" : "Pending";
    // console.log(updatedStatus);

    try {
      const res = await updateOrderFishIntoDb({
        fishId: fish?._id,
        updatedStatus: { status: updatedStatus },
      }).unwrap();

      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Container
      sx={{
        margin: "32px 0px",
      }}
    >
      <div className="mb-12">
        <h2 className="text-[20px] md:text-[28px] font-semibold text-[#010937]">
          Orders Management
        </h2>
        <div className="h-[2px] w-[200px] md:w-[280px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
      </div>

      {/* table */}
      <div className="overflow-hidden overflow-x-auto">
        <Table size="small">
          <TableHead
            sx={{
              marginBottom: "12px",
            }}
          >
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
                  <button
                    className={`${
                      fish.status === "Pending"
                        ? "bg-[#c62828] py-[8px] px-[16px] rounded-[50px] text-white"
                        : "bg-[#0095CF] py-[8px] px-[16px] rounded-[50px] text-white"
                    } w-[100px]`}
                    onClick={() => handleStatusChange(fish)}
                  >
                    {fish.status}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default OrdersManagementPage;
