import FishSaleCard from "@/components/FlashSalePage/FishSaleCard";
import { Container } from "@mui/material";

const FlashSale = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  return (
    <div className="my-16">
      <Container>
        <div className="space-y-1">
          <h1 className="text-[24px] lg:text-[28px] font-semibold text-[#010937]">
            Flash Sale
          </h1>
          <div>
            <p className="font-semibold text-[#010937]">
              Showing 1–12 of all item(s)
            </p>
            <p className="text-[16px] text-[#757F95]">
              Fish ideal for diverse culinary creations. Known for its conduct
              omnivorous feeding behavior.
            </p>
          </div>
        </div>

        {/* card */}
        <div className="mt-8">
          <FishSaleCard fishes={fishes} lgCount={3} />
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
