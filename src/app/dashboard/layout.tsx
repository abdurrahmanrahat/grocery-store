import MobileMenu from "@/components/Dashboard/MobileMenu/MobileMenu";
import Sidebar from "@/components/Shared/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:grid grid-cols-12">
      <div className="hidden md:block col-span-2">
        <Sidebar></Sidebar>
      </div>

      {/* for mobile */}
      <MobileMenu />

      <div className="col-span-10 h-full px-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
