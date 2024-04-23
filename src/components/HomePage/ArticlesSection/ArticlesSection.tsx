import ArticleImg1 from "@/asserts/home/articles/1.jpg";
import ArticleImg2 from "@/asserts/home/articles/2.jpg";
import ArticleImg3 from "@/asserts/home/articles/3.jpg";
import ArticleImg4 from "@/asserts/home/articles/4.jpg";
import ArticleIcon1 from "@/asserts/home/articles/icon1.svg";
import ArticleIcon2 from "@/asserts/home/articles/icon2.svg";
import ArticleIcon3 from "@/asserts/home/articles/icon3.svg";
import ArticleIcon4 from "@/asserts/home/articles/icon4.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";

const articleBlogs = [
  {
    id: 1,
    title: "Solo & Team Fishing",
    image: ArticleImg1,
    icon: ArticleIcon1,
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
  },
  {
    id: 2,
    title: "Fishing Competitions",
    image: ArticleImg2,
    icon: ArticleIcon2,
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
  },
  {
    id: 3,
    title: "Fishing Equipments",
    image: ArticleImg3,
    icon: ArticleIcon3,
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
  },
  {
    id: 4,
    title: "Fishing Tour",
    image: ArticleImg4,
    icon: ArticleIcon4,
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
  },
];

const ArticlesSection = () => {
  return (
    <Container
      sx={{
        marginY: "64px",
        paddingBottom: "30px",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[36px] font-semibold text-[#010937]">Articles</h1>
          <div className="h-[2px] w-[140px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
        </div>
        <p className="text-[#929AAB] max-w-[60ch] text-center mt-[12px]">
          Explore top articles from admin for quality services from fresh
          produce to pantry staples, curated for excellence
        </p>
      </div>

      {/* cards */}
      <div className="relative w-full h-auto grid grid-cols-12 gap-[30px] lg:gap-[40px] 2xl:gap-[50px] mt-[30px] md:mt-[60px]">
        {articleBlogs?.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-4 lg:col-span-4"
          >
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: "0px 80px 0px 0px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  width={600}
                  height={400}
                  alt={item.title}
                  className="rounded-tr-[80px]"
                />
                <div className="absolute -bottom-10 right-10 bg-white p-[14px] rounded-[50%]">
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="mt-[24px]">
                <h2 className="text-[20px] font-semibold cursor-pointer hover:text-[#0095CF] duration-500">
                  {item.title}
                </h2>
                <p className="text-[#929AAB] text-[15px] leading-[25px]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-[8px]">
                <Button
                  sx={{
                    borderRadius: "40px",
                    fontWeight: "700",
                    padding: "10px 18px",
                  }}
                >
                  <Box>Read More</Box> <ChevronRightOutlinedIcon />
                </Button>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ArticlesSection;
