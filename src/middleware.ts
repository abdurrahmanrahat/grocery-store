import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authKey } from "./constants/authKey";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  //   console.log(request.nextUrl);
  //   console.log(pathname);

  // get user info
  //   const userInfo = getUserInfo();
  //   console.log("userInfo ==>", userInfo);

  const accessToken = cookies().get(authKey)?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:page*",
};
