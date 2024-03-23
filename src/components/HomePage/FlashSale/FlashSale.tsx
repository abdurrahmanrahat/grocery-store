import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(
    "https://grocery-store-server-one.vercel.app/api/v1/fishes"
  );
  const { data: fishes } = await res.json();
  console.log(fishes);

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
        <div></div>
      </Container>
    </div>
  );
};

export default FlashSale;
