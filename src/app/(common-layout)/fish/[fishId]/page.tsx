import { Container } from "@mui/material";

type TFishProps = { params: { fishId?: string } };

const SingleFishPage = async ({ params }: TFishProps) => {
  console.log(params);
  const res = await fetch(
    `https://grocery-store-server-one.vercel.app/api/v1/fishes/${params.fishId}`
  );
  const { data: fish } = await res.json();
  console.log(fish);

  return <Container>SingleFishPage</Container>;
};

export default SingleFishPage;
