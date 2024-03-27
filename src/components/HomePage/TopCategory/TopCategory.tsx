import CarpImg from "@/asserts/home/category/carp.png";
import HilsaImg from "@/asserts/home/category/hilsa.png";
import MahiImg from "@/asserts/home/category/mahi.png";
import salmonImg from "@/asserts/home/category/salmon.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TopCategory = () => {
  return (
    <div className="my-16 md:my-24">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[36px] font-semibold text-[#010937]">
            Top Categories
          </h1>
          <p className="text-[#757F95] max-w-[60ch] text-center">
            Explore top categories for quality products from fresh produce to
            pantry staples, curated for excellence
          </p>
        </div>

        {/* card */}
        <div className="md:flex justify-between gap-6 mt-12">
          <Box
            component={Link}
            href="/fish?category=carp"
            className="relative mb-4 md:mb-0"
          >
            <Image src={CarpImg} className="rounded-md" alt="carp image" />
            <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
              Carp Fishes
            </h2>
          </Box>

          <div className="flex flex-col justify-between gap-4">
            <Box
              component={Link}
              href="/fish?category=salmon"
              className="relative"
            >
              <Image
                src={salmonImg}
                className="rounded-md"
                alt="salmon image"
              />
              <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
                Salmon Fishes
              </h2>
            </Box>

            <Box
              component={Link}
              href="/fish?category=mahi"
              className="relative"
            >
              <Image src={MahiImg} className="rounded-md" alt="mahi image" />
              <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
                Mahi Fishes
              </h2>
            </Box>
          </div>

          <Box
            component={Link}
            href="/fish?category=hilsa"
            className="relative mt-4 md:mt-0"
          >
            <Image src={HilsaImg} className="rounded-md" alt="hilsa image" />
            <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
              Hilsa Fishes
            </h2>
          </Box>
        </div>

        {/* button */}
        <div className="text-center mt-8">
          <Button
            sx={{
              borderRadius: "40px",
              fontWeight: "700",
            }}
            component={Link}
            href="/fish"
          >
            <Box>View All</Box> <ChevronRightOutlinedIcon />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TopCategory;
