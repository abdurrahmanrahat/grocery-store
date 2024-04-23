"use client";

import {
  useGetAllCartFishesFromDbQuery,
  useUpdateCartFishIntoDbMutation,
} from "@/redux/api/cartFishApi";
import { getUserInfo } from "@/services/auth.services";
import { TCartFish } from "@/types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import toast from "react-hot-toast";

const CartProductsTable = () => {
  // get user info
  const userInfo = getUserInfo();

  const { data: cartFishes } = useGetAllCartFishesFromDbQuery({
    email: userInfo?.email,
  });

  const [updateCartFishIntoDb] = useUpdateCartFishIntoDbMutation();

  const handleQuantityIncrease = async (fish: TCartFish) => {
    const updatedQuantity = fish.quantity > 0 ? fish.quantity + 1 : 0;
    // console.log(updatedQuantity);

    try {
      const res = await updateCartFishIntoDb({
        fishId: fish?._id,
        updatedQuantity: { quantity: updatedQuantity },
      }).unwrap();

      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

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
              <TableCell>
                <div className="flex justify-between gap-[12px] border border-solid border-[#D7D7D7] p-[6px] rounded-[40px] text-[13px] font-medium">
                  <span className="cursor-pointer">
                    <RemoveOutlinedIcon sx={{ fontSize: "13px" }} />
                  </span>
                  <span>{fish.quantity}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleQuantityIncrease(fish)}
                  >
                    <AddOutlinedIcon sx={{ fontSize: "13px" }} />
                  </span>
                </div>
              </TableCell>
              <TableCell>{fish.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartProductsTable;
