"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

export const setAccessToken = (token: string) => {
  cookies().set(authKey, token);
};
