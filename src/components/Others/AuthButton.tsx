import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const userInfo = getUserInfo();
  // const user = isUserExist();
  // console.log(userInfo);

  // logout user
  const handleLogout = () => {
    removeUser();
    deleteCookies([authKey]);
    router.push("/");
    router.refresh();
  };

  return (
    <>
      {userInfo?.email ? (
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
