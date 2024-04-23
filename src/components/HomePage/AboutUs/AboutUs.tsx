import AboutImg1 from "@/asserts/home/about/1.jpg";
import AboutImg2 from "@/asserts/home/about/2.jpg";
import AboutIcon1 from "@/asserts/home/about/icon1.svg";
import AboutIcon2 from "@/asserts/home/about/icon2.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-[30px] lg:gap-[40px] 2xl:gap-[50px]">
        {/* image div */}
        <div className="col-span-12 lg:col-span-6 relative">
          <Image
            src={AboutImg1}
            width={630}
            height={700}
            alt="fish about"
            className="rounded-tr-[120px] pr-10"
          />
          <Image
            src={AboutImg2}
            width={250}
            height={300}
            alt="fish about"
            className="absolute -bottom-10 right-0 rounded-tl-[80px] border-[8px] border-solid border-white"
          />
        </div>

        {/* content div */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-[12px] mt-[60px] lg:mt-0">
          <div>
            <h4 className="text-[17px] font-medium">ABOUT US</h4>
            <div className="h-[2px] w-[90px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
          </div>
          <h2 className="text-[26px] lg:text-[44px] font-bold">
            Explore Your{" "}
            <span className="text-[#0095CF]">Exciting Fishing</span> World With
            Us.
          </h2>
          <p className="text-[#929AAB] text-[15px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&aspos;t look even slightly
            believable. If you are going to use a passage of orem psum you need
            to be sure.All the Lorem Ipsum generators on the Internet tend to
            repeat predefined chunks.
          </p>

          {/* icon with details */}
          <div className="mt-[8px] space-y-2">
            <div className="flex gap-[16px]">
              <Image src={AboutIcon1} width={60} height={60} alt="About icon" />
              <div>
                <h4 className="text-[18px] font-semibold">
                  Fishing Tournament
                </h4>
                <p className="text-[#929AAB] text-[15px]">
                  Take a look at our round up of the best shows.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <Image src={AboutIcon2} width={60} height={60} alt="About icon" />
              <div>
                <h4 className="text-[18px] font-semibold">Free Fishing Day</h4>
                <p className="text-[#929AAB] text-[15px]">
                  It has survived words which not only five centuries.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[8px]">
            <Button
              sx={{
                borderRadius: "40px",
                fontWeight: "700",
                padding: "10px 18px",
              }}
            >
              <Box>Discover More</Box> <ChevronRightOutlinedIcon />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
