"use server";

import { TRegisterUser } from "@/types";

export const registerUser = async (userData: TRegisterUser) => {
  const res = await fetch(`${process.env.BACKED_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};
