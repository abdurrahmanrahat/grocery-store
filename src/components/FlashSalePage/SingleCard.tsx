import { TFish } from "@/types";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SingleCard = ({ fish, lgCount }: { fish: TFish; lgCount: number }) => {
  return (
    <Grid item md={6} lg={lgCount}>
      <Card elevation={0}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Image src={fish.image[0]} width={500} height={100} alt="Image" />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "primary.dark",
              padding: "8px",
              color: "primary.light",
              fontSize: "12px",
              borderRadius: "10px",
            }}
          >
            -{fish.discountPercentage}%
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h6" fontSize="20px" fontWeight={500}>
            {fish.title}
          </Typography>
          <div className="flex justify-between pt-2 pb-5">
            <div className="flex gap-2 text-[#757F95] text-[14px]">
              <del className="font-semibold text-[14px]">${fish.price}</del>
              <Typography color="primary.dark" fontWeight={600} fontSize="14px">
                ${Number(fish.price) - 20}
              </Typography>
            </div>
            <Link href={`/fish/${fish._id}`}>
              <ArrowForwardOutlinedIcon />
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleCard;
