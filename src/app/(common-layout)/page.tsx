import BannerCarousel from "@/components/HomePage/BannerCarousel/BannerCarousel";
import Features from "@/components/HomePage/Features/Features";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import PopularProducts from "@/components/HomePage/PopularProducts/PopularProducts";
import TopCategory from "@/components/HomePage/TopCategory/TopCategory";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <Features />
      <FlashSale />
      <TopCategory />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
