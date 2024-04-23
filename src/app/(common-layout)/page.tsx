import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import BannerCarousel from "@/components/HomePage/BannerCarousel/BannerCarousel";
import Features from "@/components/HomePage/Features/Features";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import PopularProducts from "@/components/HomePage/PopularProducts/PopularProducts";
import TopCategory from "@/components/HomePage/TopCategory/TopCategory";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <Features />
      <FlashSale />
      <TopCategory />
      <AboutUs />
      <PopularProducts />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
