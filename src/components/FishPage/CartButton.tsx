"use client";

import { useCreateCartFishIntoDbMutation } from "@/redux/api/cartFishApi";
import { getUserInfo } from "@/services/auth.services";
import { TFish } from "@/types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";

const CartButton = ({ fish }: { fish: TFish }) => {
  // get user info
  const userInfo = getUserInfo();

  const [createCartFishIntoDb] = useCreateCartFishIntoDbMutation();

  const handleCartFish = async () => {
    const cartFish = {
      ...fish,
      email: userInfo.email,
      userName: userInfo.name,
      status: "Pending",
    };

    try {
      const res = await createCartFishIntoDb(cartFish).unwrap();

      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="md:flex justify-between gap-[30px]">
      <div className="flex justify-between gap-[20px] border border-solid border-[#D7D7D7] p-[10px] rounded-[40px]">
        <span className="cursor-pointer">
          <RemoveOutlinedIcon />
        </span>
        <span>1</span>
        <span className="cursor-pointer">
          <AddOutlinedIcon />
        </span>
      </div>
      <Button
        sx={{
          fontSize: "17px",
          fontWeight: "500",
          borderRadius: "40px",
          background: "#000",
        }}
        fullWidth={true}
        onClick={handleCartFish}
      >
        <ShoppingCartOutlinedIcon /> <Box ml={1}>Add to Cart</Box>
      </Button>
    </div>
  );
};

export default CartButton;
