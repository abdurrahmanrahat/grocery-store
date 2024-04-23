"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const FishImageSlide = ({ fishImages }: { fishImages: string[] }) => {
  return (
    <Swiper
      //   spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {fishImages.map((item, index) => (
        <SwiperSlide key={index} className="">
          <Image
            src={item}
            width={350}
            height={400}
            alt={item}
            className="rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FishImageSlide;
