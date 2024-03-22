import { Box, Button, Container } from "@mui/material";

import CarpImg from "@/asserts/home/category/carp.png";
import HilsaImg from "@/asserts/home/category/hilsa.png";
import MahiImg from "@/asserts/home/category/mahi.png";
import salmonImg from "@/asserts/home/category/salmon.png";
import Image from "next/image";
import Link from "next/link";

const TopCategory = () => {
  return (
    <div className="my-[24px]">
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
          <div className="relative">
            <Image src={CarpImg} className="rounded-md" alt="carp image" />
            <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
              Carp Fishes
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="relative">
              <Image
                src={salmonImg}
                className="rounded-md"
                alt="salmon image"
              />
              <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
                Salmon Fishes
              </h2>
            </div>
            <div className="relative">
              <Image src={MahiImg} className="rounded-md" alt="mahi image" />
              <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
                Mahi Fishes
              </h2>
            </div>
          </div>

          <div className="relative">
            <Image src={HilsaImg} className="rounded-md" alt="hilsa image" />
            <h2 className="absolute bottom-6 left-6 text-[28px] font-semibold text-white">
              Hilsa Fishes
            </h2>
          </div>
        </div>

        {/* button */}
        <div className="text-center mt-8">
          <Button
            sx={{
              borderRadius: "40px",
              fontWeight: "700",
            }}
            component={Link}
            href="#"
          >
            <Box>View All</Box>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TopCategory;
