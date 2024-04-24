"use client";

import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import { loginUser } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// default values for showing error message
const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: any) => {
    // console.log(values);
    try {
      const res = await registerUser(values);
      // console.log(res);
      if (res.success) {
        toast.success(res.message);

        // auto login after user register
        const userRes = await loginUser({
          email: values.email,
          password: values.password,
        });
        if (userRes.success) {
          storeUserInfo({ accessToken: userRes.token });
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
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
            <GSForm onSubmit={handleRegister} defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <GSInput name="name" label="Name" type="text" />
                </Grid>
                <Grid item md={6}>
                  <GSInput name="email" label="Email" type="email" />
                </Grid>
                <Grid item md={6}>
                  <GSInput name="password" label="Password" type="password" />
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
            </GSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
