import Sidebar from "@/components/Shared/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
