"use server";

import { TLoginUser } from "@/types";
import { setAccessToken } from "./setAccessToken";

export const loginUser = async (userData: TLoginUser) => {
  const res = await fetch(`${process.env.BACKED_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  // console.log(userInfo);

  if (userInfo?.token) {
    setAccessToken(userInfo.token);
  }

  return userInfo;
};
