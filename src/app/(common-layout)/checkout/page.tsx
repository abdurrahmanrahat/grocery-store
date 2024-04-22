import CartProductsTable from "@/components/CheckoutPage/CartProductsTable";
import OrderSumCalcDiv from "@/components/CheckoutPage/OrderSumCalcDiv";
import { Container } from "@mui/material";

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
        <div className="col-span-12 md:col-span-6 bg-[#f0f0f0] rounded-[20px] p-[20px] lg:p-[40px]">
          <p className="md:text-[17px] font-light text-[#757F95]">
            By placing your order, you agree to our company Privacy policy and
            Conditions of use.
          </p>
          <div className="border-b border-solid border-[#D7D7D7] my-[30px]"></div>
          <h4 className="text-[20px] font-semibold">Order Summary</h4>

          {/* calc div */}
          <OrderSumCalcDiv />
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
