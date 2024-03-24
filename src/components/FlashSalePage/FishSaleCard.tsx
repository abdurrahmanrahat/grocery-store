"use client";

import { TFish } from "@/types";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import SingleCard from "./SingleCard";

const FishSaleCard = ({ fishes }: { fishes: TFish[] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Grid container spacing={2}>
        {isOpen
          ? fishes
              ?.slice(0, 12)
              .map((fish: TFish) => <SingleCard key={fish._id} fish={fish} />)
          : fishes?.map((fish: TFish) => (
              <SingleCard key={fish._id} fish={fish} />
            ))}
      </Grid>

      {/* button */}
      {isOpen ? (
        <div className="text-center mt-8">
          <Button
            sx={{
              borderRadius: "40px",
              fontWeight: "700",
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Box>View All</Box> <ChevronRightOutlinedIcon />
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FishSaleCard;
