import PersonImage from "@/asserts/dashboard/demo.png";
import MobileMenu from "@/components/Dashboard/MobileMenu/MobileMenu";
import Sidebar from "@/components/Shared/Sidebar";
import Image from "next/image";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:grid grid-cols-12">
      <div className="hidden md:block col-span-2 bg-gradient-to-r from-[#0094cf1a] to-[#0094cf18]">
        <Sidebar></Sidebar>
      </div>

      {/* for mobile */}
      <MobileMenu />

      <div className="col-span-10 h-full">
        <div className="hidden lg:flex gap-2 justify-end items-center bg-gradient-to-r from-[#0094cf1a] to-[#0094cf18] px-5 py-2">
          <div className="text-end">
            <h4 className="font-semibold">Abdur Rahman</h4>
            <p className="text-[14px]">Admin</p>
          </div>
          <div>
            <Image
              src={PersonImage}
              width={40}
              height={40}
              className="rounded-full"
              alt="person"
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
