"use client";

import LoadingJson from "@/asserts/loading.json";
import Lottie from "lottie-react";

const LoadingPage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[400px] md:w-[600px]">
        <Lottie animationData={LoadingJson} loop={true} />
      </div>
    </div>
  );
};

export default LoadingPage;
