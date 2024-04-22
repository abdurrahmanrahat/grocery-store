"use client";

import { useGetAllCartFishesFromDbQuery } from "@/redux/api/cartFishApi";
import { TCartFish } from "@/types";

const OrderSumCalcDiv = () => {
  const { data: cartFishes } = useGetAllCartFishesFromDbQuery({});

  let totalPrice = 0;
  cartFishes?.data?.forEach((item: TCartFish) => {
    const priceMultiByQuantity = Number(item.price) * item.quantity;
    totalPrice = priceMultiByQuantity + totalPrice;
  });
  //   console.log(totalPrice);
  const shippingCost = cartFishes?.data?.length * 15;
  const beforeTax = totalPrice + shippingCost;
  const taxCollected = beforeTax * 0.02;
  const totalOrderAmount = beforeTax + taxCollected;

  return (
    <div className="mt-[30px] space-y-2">
      <div className="flex justify-between">
        <h4 className="font-medium">Items({cartFishes?.data?.length})</h4>
        <p>{totalPrice || 0}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="font-medium">Shipping and handling:</h4>
        <p>{shippingCost || 0}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="font-medium">Before Tax:</h4>
        <p>{beforeTax || 0}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="font-medium">Tax Collected:</h4>
        <p>{taxCollected.toFixed(2) || 0}</p>
      </div>
      <div>
        <div className="border-b border-solid border-[#D7D7D7] my-[16px]"></div>
      </div>
      <div className="flex justify-between">
        <h4 className="font-medium text-[18px]">Total Order:</h4>
        <p>{totalOrderAmount.toFixed(2) || 0}</p>
      </div>
    </div>
  );
};

export default OrderSumCalcDiv;
