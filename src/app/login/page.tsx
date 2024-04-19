"use client";

import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
  const handleLogin = async (values: FieldValues) => {
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
                Login User
              </Typography>
            </Box>
          </Stack>

          {/* form field */}
          <Box>
            <GSForm onSubmit={handleLogin}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  {/* <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  /> */}
                  <GSInput />
                </Grid>
                <Grid item md={12}>
                  {/* <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  /> */}
                  <GSInput />
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
                Login
              </Button>

              <Typography component="p" fontWeight={300}>
                Don&apos;t Have an Account?{" "}
                <span className="text-[#0095CF] font-medium">
                  <Link href="/register" color="primary.main">
                    Register
                  </Link>
                </span>
              </Typography>
            </GSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
