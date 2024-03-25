import FishSaleCard from "@/components/FlashSalePage/FishSaleCard";
import { Container, Grid } from "@mui/material";

const FishPage = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  return (
    <div className="my-16">
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            <h2>Hello</h2>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <div className="space-y-1">
              <h1 className="text-[24px] lg:text-[28px] font-semibold text-[#010937]">
                Our Collection of Fishes
              </h1>
              <div>
                <p className="font-semibold text-[#010937]">
                  Showing 1–12 of all item(s)
                </p>
                <p className="text-[16px] text-[#757F95]">
                  Fish ideal for diverse culinary creations. Known for its
                  conduct omnivorous feeding behavior.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="mt-8">
              <FishSaleCard fishes={fishes} lgCount={4} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FishPage;
