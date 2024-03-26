"use client";

import CountDownImg from "@/asserts/demo.gif";
import Image from "next/image";

const CountDownCom = () => {
  return <Image src={CountDownImg} width={340} height={200} alt="count down" />;
};

export default CountDownCom;
