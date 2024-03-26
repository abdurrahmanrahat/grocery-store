import { TFish } from "@/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: fishes } = await res.json();
  // console.log(fishes);

  return (
    <div className="my-16">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-semibold text-[#010937]">
            Flash Sale
          </h1>
          <Button
            sx={{
              borderRadius: "40px",
              fontWeight: "700",
            }}
            component={Link}
            href="#"
          >
            <Box>View All</Box> <ChevronRightOutlinedIcon />
          </Button>
        </div>

        {/* card */}
        <div className="mt-8">
          <Grid container spacing={2}>
            {fishes &&
              fishes?.slice(0, 4).map((fish: TFish) => (
                <Grid item key={fish._id} md={6} lg={3}>
                  <Card
                    elevation={0}
                    sx={
                      {
                        // border: "none",
                      }
                    }
                  >
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Image
                        src={fish.image[0]}
                        width={500}
                        height={100}
                        alt="Image"
                      />
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
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "space-between",
                        px: 2,
                        paddingBottom: "20px",
                      }}
                    >
                      <div className="flex gap-2 text-[#757F95] text-[14px]">
                        <del className="font-semibold text-[14px]">
                          ${fish.price}
                        </del>
                        <Typography
                          color="primary.dark"
                          fontWeight={600}
                          fontSize="14px"
                        >
                          ${Number(fish.price) - 20}
                        </Typography>
                      </div>
                      <AddCircleOutlineIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
