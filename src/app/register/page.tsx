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
            border: 0,
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
            <Box sx={{ marginBottom: "4px" }}>
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
              </Grid>

              {/* submit button */}
              <Button
                sx={{
                  marginY: "16px",
                  fontSize: "17px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do You Already Have an Account?{" "}
                <span className="text-[#0095CF] font-medium">
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
