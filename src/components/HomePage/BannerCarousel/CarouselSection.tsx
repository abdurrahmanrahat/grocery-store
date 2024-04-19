import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TFish } from "@/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const CarouselSection = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {fishes.slice(4, 9).map((fish: TFish) => (
            <CarouselItem
              key={fish._id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card elevation={0}>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Image
                      src={fish.image[0]}
                      width={400}
                      height={100}
                      alt="Image"
                      className="h-[220px] object-cover"
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
                    <Typography variant="h6" fontSize="18px" fontWeight={600}>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
