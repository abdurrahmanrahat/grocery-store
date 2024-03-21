import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
