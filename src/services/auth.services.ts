import { authKey } from "@/constants/authKey";
import { setToLocalStorage } from "@/utils/local-storage";

// store user info to local storage
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
