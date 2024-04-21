import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const userInfo = getUserInfo();

  const router = useRouter();

  if (!userInfo?.email) {
    return router.replace("/login");
  }

  return children;
};

export default ProtectedRoute;
