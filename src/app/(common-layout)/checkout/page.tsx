import CartProductsTable from "@/components/CheckoutPage/CartProductsTable";
import OrderSumCalcDiv from "@/components/CheckoutPage/OrderSumCalcDiv";
import ShippingForm from "@/components/CheckoutPage/ShippingForm";
import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout || Grocery Store",
};

const CheckoutPage = () => {
  return (
    <Container
      sx={{
        marginY: "60px",
      }}
    >
      <div className="grid grid-cols-12 gap-[30px] lg:gap-[50px]">
        {/* table */}
        <CartProductsTable />

        {/* calculation */}
        <div className="col-span-12 md:col-span-6 bg-[#f0f0f0] rounded-[20px] px-[20px] py-[30px] lg:px-[40px] lg:py-[60px]">
          <p className="md:text-[17px] font-light text-[#757F95]">
            By placing your order, you agree to our company Privacy policy and
            Conditions of use.
          </p>
          <div className="border-b border-solid border-[#D7D7D7] my-[30px]"></div>
          <h4 className="text-[20px] font-medium">Order Summary</h4>

          {/* calc div */}
          <OrderSumCalcDiv />
        </div>
      </div>

      {/* address form */}
      <div className="grid grid-cols-12 mt-[30px] md:mt-0">
        <div className="relative w-full h-auto col-span-12 md:col-span-6">
          <h4 className="text-[20px] font-medium">Shipping Address</h4>
          <ShippingForm />
        </div>
      </div>

      {/* delivery button */}
      <div className="grid grid-cols-12 mt-[60px]">
        <div className="relative w-full h-auto col-span-12 md:col-span-6">
          <h4 className="text-[20px] font-medium mb-[20px]">Payment Method</h4>
          <button className="text-[17px] font-medium rounded-[20px] p-[20px] shadow-lg w-full">
            Cash on Delivery
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
