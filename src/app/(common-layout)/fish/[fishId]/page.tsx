import ReturnSvg from "@/asserts/svg/3d-rotate.svg";
import DeliverSvg from "@/asserts/svg/group.svg";
import CartButton from "@/components/FishPage/CartButton";
import FishImageSlide from "@/components/FishPage/FishImageSlide";
import { TFish } from "@/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Container, Grid } from "@mui/material";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type TFishProps = { params: { fishId?: string } };

type TMetaProps = {
  params: { fishId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: TMetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const fishId = params?.fishId;

  // fetch data
  const res = await fetch(
    `https://grocery-store-server-one.vercel.app/api/v1/fishes/${fishId}`
  );
  const fishProduct = await res.json();

  return {
    title: `${fishProduct.data.title} || Grocery Store`,
  };
}

const SingleFishPage = async ({ params }: TFishProps) => {
  //   console.log(params);
  const res = await fetch(
    `https://grocery-store-server-one.vercel.app/api/v1/fishes/${params.fishId}`
  );
  const { data: fish }: { data: TFish } = await res.json();
  //   console.log(fish);

  return (
    <div className="my-16 md:my-20 lg:my-24">
      <Container>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="relative w-full h-auto px-[12px]">
              <FishImageSlide fishImages={fish.image} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <div className="relative">
              <h2 className="text-[24px] lg:text-[28px] font-semibold mb-2">
                {fish.title}
              </h2>
              <div className="flex gap-2">
                <h4 className="text-[20px] font-medium">${fish.price}</h4>
                <span className="font-semibold">|</span>
                <div className="flex gap-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <p>( 32 reviews )</p>
                </div>
              </div>
              {/* love icon */}
              <div className="absolute top-0 right-0">
                <FavoriteBorderIcon />
              </div>
            </div>

            {/* describe */}
            <div className="space-y-6">
              <p>{fish.description}</p>
              <div>
                {fish?.features.slice(0, 3).map((item, index) => (
                  <li key={index} className="text-[14px]">
                    {item}
                  </li>
                ))}
                {/* <li className="text-[14px]">{fish.features.one}</li>
                <li className="text-[14px]">{fish.features.two}</li> */}
              </div>

              {/* cart button */}
              <CartButton fish={fish} />

              <div className="space-y-2">
                <div className="flex gap-4">
                  <Image
                    src={DeliverSvg}
                    width={24}
                    height={24}
                    alt="deliver"
                  />
                  <p className="text-[14px]">
                    Free worldwide shipping on all orders over $100
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image src={ReturnSvg} width={24} height={24} alt="deliver" />
                  <p className="text-[14px]">
                    Delivers in: 3-7 Working Days Shipping & Return
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* more details div */}
        <div className="mt-12">
          <h2 className="text-[24px] lg:text-[28px] font-medium my-4">
            Description
          </h2>
          <div className="space-y-6">
            <p>
              {fish.description} {fish.description}
            </p>
            <div>
              {fish?.features.map((item, index) => (
                <li key={index} className="text-[15px]">
                  {item}
                </li>
              ))}
              {/* <li className="text-[15px]">{fish.features.one}</li>
              <li className="text-[15px]">{fish.features.two}</li>
              <li className="text-[15px]">{fish.features.three}</li>
              <li className="text-[15px]">{fish.features.four}</li> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleFishPage;

// load 12 fish data on build time.
export async function generateStaticParams() {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();

  return fishes?.slice(0, 12).map((fish: TFish) => ({
    fishId: fish._id,
  }));
}
