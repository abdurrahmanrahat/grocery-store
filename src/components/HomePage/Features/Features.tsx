import FeatureImg1 from "@/asserts/home/features/1.svg";
import FeatureImg2 from "@/asserts/home/features/2.svg";
import FeatureImg3 from "@/asserts/home/features/3.svg";
import FeatureImg4 from "@/asserts/home/features/4.svg";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    image: FeatureImg1,
    title: "Expert Staff",
    desc: "It is a long established fact that a reader will be distracted by the readable content of the page.",
  },
  {
    id: 2,
    image: FeatureImg2,
    title: "Tips & Advice",
    desc: "It is a long established fact that a reader will be distracted by the readable content of the page.",
  },
  {
    id: 3,
    image: FeatureImg3,
    title: "Fishing Spot",
    desc: "It is a long established fact that a reader will be distracted by the readable content of the page.",
  },
  {
    id: 4,
    image: FeatureImg4,
    title: "Quick Membership",
    desc: "It is a long established fact that a reader will be distracted by the readable content of the page.",
  },
];

const Features = () => {
  return (
    <Container
      sx={{
        marginY: "60px",
      }}
    >
      <div className="grid grid-cols-12 gap-[30px] lg:gap-[40px] 2xl:gap-[50px]">
        {featuresData?.map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 border-b-[3px] border-solid border-[#0095CF]"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                boxShadow: 1,
                paddingX: "20px",
                paddingY: "40px",
                borderRadius: "0px 80px 0px 0px",
              }}
            >
              <Image src={item.image} width={80} height={80} alt={item.title} />
              <h2 className="text-[20px] font-bold">{item.title}</h2>
              <p className="text-center text-[#929AAB] leading-7">
                {item.desc}
              </p>
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
