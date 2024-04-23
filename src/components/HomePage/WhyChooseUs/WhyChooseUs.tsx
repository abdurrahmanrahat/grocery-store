import Icon1 from "@/asserts/home/why-choose/1.svg";
import Icon2 from "@/asserts/home/why-choose/2.svg";
import Image from "next/image";
// import ChooseImage from "../../../asserts/home/why-choose/choose.jpg";
import Icon3 from "@/asserts/home/why-choose/3.svg";
import Icon4 from "@/asserts/home/why-choose/4.svg";
import { Container } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <div
      className="relative bg-image-add bg-fixed bg-no-repeat bg-center bg-cover pb-[60px] lg:pb-[150px] pr-[20px] md:pr-[40px] lg:pr-0"
      //   style={{ backgroundImage: `url(${ChooseImage})` }}
    >
      <Container>
        <div className="px-0 w-full mx-auto">
          <div className="grid grid-cols-12">
            {/* content div */}
            <div className="col-span-12 lg:col-span-9 flex flex-col justify-center gap-[12px] p-[20px] py-[40px] md:py-0 md:p-[30px] lg:p-[60px] rounded-br-[80px] bg-white ">
              <div>
                <h4 className="text-[17px] font-medium">WHY CHOOSE US</h4>
                <div className="h-[2px] w-[140px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
              </div>
              <h2 className="text-[26px] lg:text-[48px] font-bold">
                Explore Your Day{" "}
                <span className="text-[#0095CF]">By Fishing With Exciting</span>{" "}
                People.
              </h2>
              <p className="text-[#929AAB] text-[15px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when many desktop packages and
                web page editors looking at its layout.
              </p>

              {/* icon with details */}
              <div className="mt-[8px] grid grid-cols-12 gap-[30px]">
                <div className="flex gap-[16px] col-span-12 md:col-span-6">
                  <Image src={Icon1} width={60} height={60} alt="About icon" />
                  <div>
                    <h4 className="text-[17px] md:text-[18px] font-semibold">
                      Build From The Community
                    </h4>
                    <p className="text-[#929AAB] text-[15px]">
                      There are many variations of the passages available
                      suffered.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] col-span-12 md:col-span-6">
                  <Image src={Icon2} width={60} height={60} alt="About icon" />
                  <div>
                    <h4 className="text-[17px] md:text-[18px] font-semibold">
                      Annual Member Gathering
                    </h4>
                    <p className="text-[#929AAB] text-[15px]">
                      There are many variations of the passages available
                      suffered.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] col-span-12 md:col-span-6">
                  <Image src={Icon3} width={60} height={60} alt="About icon" />
                  <div>
                    <h4 className="text-[17px] md:text-[18px] font-semibold">
                      Member Monthly Points
                    </h4>
                    <p className="text-[#929AAB] text-[15px]">
                      There are many variations of the passages available
                      suffered.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px] col-span-12 md:col-span-6">
                  <Image src={Icon4} width={60} height={60} alt="About icon" />
                  <div>
                    <h4 className="text-[17px] md:text-[18px] font-semibold">
                      Conveniently Fishing Spot
                    </h4>
                    <p className="text-[#929AAB] text-[15px]">
                      There are many variations of the passages available
                      suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
