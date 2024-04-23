"use client";

import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative w-full h-[100vh] flex flex-col justify-center items-center gap-[10px] lg:gap-[14px]">
      <h2 className="text-[#c62828] text-[24px] lg:text-[32px] font-bold">
        Something went wrong!!
      </h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        sx={{
          fontSize: "17px",
        }}
      >
        Try again
      </Button>
    </div>
  );
}
