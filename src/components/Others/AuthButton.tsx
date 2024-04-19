import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const userInfo = getUserInfo();

  // logout user
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo ? (
        <Button color="error" onClick={handleLogout} sx={{ fontSize: "17px" }}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login" sx={{ fontSize: "17px" }}>
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
