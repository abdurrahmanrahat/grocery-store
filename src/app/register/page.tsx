"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
            textAlign: "center",
          }}
        >
          {/* logo and text */}
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* logo image */}
            <Box mb={1}>
              {/* <Image src={assets.svgs.logo} width={50} height={50} alt="logo" /> */}
              <Link href="/">
                <h1 className="text-[28px] lg:text-[32px] font-bold">
                  <span className="text-[#010937]">Fish</span>
                  <span className="text-[#0095CF]">Mart</span>
                </h1>
              </Link>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                User Registration
              </Typography>
            </Box>
          </Stack>

          {/* form field */}
          <Box>
            <form onSubmit={handleSubmit(handleRegister)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("address")}
                  />
                </Grid>
              </Grid>

              {/* submit button */}
              <Button
                sx={{
                  marginY: "16px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do You Already Have an Account?{" "}
                <span className="text-[#1586FD] font-medium">
                  <Link href="/login" color="primary.main">
                    Login
                  </Link>
                </span>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
