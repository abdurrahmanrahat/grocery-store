import BannerImage from "@/asserts/home/banner.jpg";
import Image from "next/image";
import Carousel from "./Carousel";

const BannerCarousel = () => {
  return (
    <div className="relative">
      <div className="">
        <Image src={BannerImage} className="w-full" alt="banner image" />
      </div>
      <div className="absolute top-0 bg-[#01093765] w-full h-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-[32px] font-semibold max-w-[40ch] text-[#fff] text-center mx-auto">
          Vast selection, impeccable freshness, knowledgeable staff- a seafood
          enthusiast&apos;s dream come true
        </h2>
        <p className="text-[#ECE8E7] max-w-[58ch]">
          Exceptional ambiance, superior service, and gourmet offerings—this
          establishment redefines culinary excellence. A must-visit destination
          and an oasis of culinary bliss awaits, where perfection meets
          satisfaction.
        </p>

        {/* slides */}
        <div className="w-2/3">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
