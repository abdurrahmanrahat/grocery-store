import BannerImage from "@/asserts/home/banner.jpg";
import Image from "next/image";
import CarouselSection from "./CarouselSection";

const BannerCarousel = () => {
  return (
    <div className="relative">
      <div className="">
        <Image
          src={BannerImage}
          className="w-full h-[520px] md:h-[540px] lg:h-full"
          alt="banner image"
        />
      </div>
      <div className="absolute top-0 bg-[#01093765] w-full h-full flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 overflow-hidden">
        <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold max-w-[40ch] text-[#fff] text-center mx-auto">
          Vast selection, impeccable freshness, knowledgeable staff- a seafood
          enthusiast&apos;s dream come true
        </h2>
        <p className="text-[#ECE8E7] max-w-[58ch] hidden lg:block">
          Exceptional ambiance, superior service, and gourmet offerings—this
          establishment redefines culinary excellence. A must-visit destination
          and an oasis of culinary bliss awaits, where perfection meets
          satisfaction.
        </p>

        {/* slides */}
        <div className="w-2/3" data-aos="fade-up" data-aos-duration="1000">
          <CarouselSection />
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
