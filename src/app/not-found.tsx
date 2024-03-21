import NotFoundImage from "@/asserts/404.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        height: "100vh",
      }}
    >
      <Image
        src={NotFoundImage}
        width={780}
        height={780}
        alt="Not found photo"
      />
      <Typography
        component="h1"
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
        }}
        className="text-[32px] font-bold"
      >
        Opos... Page Not Found!
      </Typography>
      <Typography component="p" className="" color="secondary.main">
        The page you looking for not found may be it not exist or removed.
      </Typography>
      <Button
        sx={{
          borderRadius: "40px",
          fontWeight: "700",
        }}
        component={Link}
        href="/"
      >
        <Box>Go Back Home</Box> <HomeOutlinedIcon />
      </Button>
    </Container>
  );
};

export default NotFoundPage;
