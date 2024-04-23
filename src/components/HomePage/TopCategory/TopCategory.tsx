import Image1 from "@/asserts/home/category/1.png";
import Image2 from "@/asserts/home/category/2.png";
import Image3 from "@/asserts/home/category/3.png";
import Image4 from "@/asserts/home/category/4.png";
import Image5 from "@/asserts/home/category/5.png";
import Image6 from "@/asserts/home/category/6.png";
import { TCategory } from "@/types";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const categoryData = [
  {
    id: "1",
    title: "carp",
    image: Image1,
  },
  {
    id: "2",
    title: "haddock",
    image: Image2,
  },
  {
    id: "3",
    title: "tuna",
    image: Image3,
  },
  {
    id: "4",
    title: "mahi",
    image: Image4,
  },
  {
    id: "1",
    title: "trout",
    image: Image5,
  },
  {
    id: "6",
    title: "salmon",
    image: Image6,
  },
];

const TopCategory = () => {
  return (
    <div className="my-16 md:my-24">
      <Container>
        <Box
          sx={{
            margin: "40px 0px",
            textAlign: "center",
          }}
        >
          {/* <Box
            sx={{
              textAlign: "start",
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              Explore Treatments Across Specialist
            </Typography>
            <Typography component="p" fontWeight={300} fontSize={18}>
              Experienced Doctors Across All Specialists
            </Typography>
          </Box> */}
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-[36px] font-semibold text-[#010937]">
                Top Categories
              </h1>
              <div className="h-[2px] w-[280px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
            </div>
            <p className="text-[#929AAB] max-w-[60ch] text-center mt-[12px]">
              Explore top categories for quality products from fresh produce to
              pantry staples, curated for excellence
            </p>
          </div>

          {/* display data in card */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[10px] mt-[60px]">
            {categoryData?.slice(0, 6).map((item: TCategory) => (
              <Box
                component={Link}
                href={`/fish?category=${item.title}`}
                key={item.id}
                sx={{
                  flex: 1,
                  width: "150px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  border: "1px solid rgba(250, 250, 250, 1)",
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "40px 10px",
                  "& img": {
                    width: "60px",
                    height: "60px",
                    margin: "0 auto",
                  },
                  "&:hover": {
                    border: "1px solid #0095CF",
                    padding: "40px 10px",
                    borderRadius: "10px",
                  },
                }}
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <Box>
                  <Typography
                    component="p"
                    fontWeight={600}
                    fontSize={18}
                    mt={2}
                    textTransform="capitalize"
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </div>

          <Box mt={5}>
            <Button component={Link} href="/fish" variant="outlined">
              View All
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default TopCategory;
