import AboutImg1 from "@/asserts/home/about/1.jpg";
import AboutImg2 from "@/asserts/home/about/2.jpg";
import AboutIcon1 from "@/asserts/home/about/icon1.svg";
import AboutIcon2 from "@/asserts/home/about/icon2.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Container>
      {/* image div */}
      <div>
        <Image src={AboutImg1} width={630} height={700} alt="fish about" />
        <Image src={AboutImg2} width={450} height={500} alt="fish about" />
      </div>

      {/* content div */}
      <div>
        <h4>ABOUT US</h4>
        <h2>Explore Your Exciting Fishing World With Us.</h2>
        <p className="text-[#929AAB]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&aspos;t look even slightly
          believable. If you are going to use a passage of orem psum you need to
          be sure.All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks.
        </p>

        {/* icon with details */}
        <div>
          <div>
            <Image src={AboutIcon1} width={80} height={80} alt="About icon" />
            <div>
              <h4>Fishing Tournament</h4>
              <p className="text-[#929AAB]">
                Take a look at our round up of the best shows.
              </p>
            </div>
          </div>
          <div>
            <Image src={AboutIcon2} width={80} height={80} alt="About icon" />
            <div>
              <h4>Free Fishing Day</h4>
              <p className="text-[#929AAB]">
                It has survived words which not only five centuries.
              </p>
            </div>
          </div>
        </div>

        <Button
          sx={{
            borderRadius: "40px",
            fontWeight: "700",
          }}
        >
          <Box>Discover More</Box> <ChevronRightOutlinedIcon />
        </Button>
      </div>
    </Container>
  );
};

export default AboutUs;
