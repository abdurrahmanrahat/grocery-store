import BannerCarousel from "@/components/HomePage/BannerCarousel/BannerCarousel";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import TopCategory from "@/components/HomePage/TopCategory/TopCategory";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <FlashSale />
      <TopCategory />
    </div>
  );
};

export default HomePage;
