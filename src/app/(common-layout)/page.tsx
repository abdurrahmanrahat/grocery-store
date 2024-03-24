import BannerCarousel from "@/components/HomePage/BannerCarousel/BannerCarousel";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import PopularProducts from "@/components/HomePage/PopularProducts/PopularProducts";
import TopCategory from "@/components/HomePage/TopCategory/TopCategory";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <FlashSale />
      <TopCategory />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
