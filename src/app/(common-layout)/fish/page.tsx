import PriceRange from "@/components/FishPage/PriceRange";
import FishSaleCard from "@/components/FlashSalePage/FishSaleCard";
import { Checkbox, Container, FormControlLabel, Grid } from "@mui/material";

const FishPage = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  // const param = useParams();
  // console.log();

  return (
    <div className="my-16">
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* price range */}
            <div>
              <div className="border-l-4 border-[#010937] font-medium text-[20px] pl-2">
                Price Range
              </div>

              <PriceRange />
            </div>

            {/* categories */}
            <div>
              <div className="border-l-4 border-[#010937] font-medium text-[20px] pl-2">
                Category / Brand
              </div>
              <div className="flex flex-col mt-4">
                <FormControlLabel control={<Checkbox />} label="Carp" />
                <FormControlLabel control={<Checkbox />} label="Haddock" />
                <FormControlLabel control={<Checkbox />} label="Hilsa" />
                <FormControlLabel control={<Checkbox />} label="Mahi" />
                <FormControlLabel control={<Checkbox />} label="Salmon" />
              </div>
            </div>
            {/* price range */}
            <div>
              <div className="border-l-4 border-[#010937] font-medium text-[20px] pl-2">
                Ratings
              </div>
              <div className="flex flex-col mt-4">
                <FormControlLabel control={<Checkbox />} label="1 Star" />
                <FormControlLabel control={<Checkbox />} label="2 Star" />
                <FormControlLabel control={<Checkbox />} label="3 Star" />
                <FormControlLabel control={<Checkbox />} label="4 Star" />
                <FormControlLabel control={<Checkbox />} label="5 Star" />
              </div>
            </div>
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
