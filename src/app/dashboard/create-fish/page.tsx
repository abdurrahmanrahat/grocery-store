"use client";

import GSFileUploader from "@/components/Forms/GSFileUploader";
import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import GSSelectField from "@/components/Forms/GSSelectField";
import GSTextArea from "@/components/Forms/GSTextArea";
import { useCreateFishIntoDbMutation } from "@/redux/api/fishApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import toast from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Fish || Dashboard",
};

const categoryItems = ["Carp", "Haddock", "Hilsa", "Mahi", "Salmon"];
const discountItems = ["YES", "NO"];

const defaultProduct = {
  title: "",
  image: null,
  price: "",
  category: "",
  isDiscount: "",
  discountPercentage: "",
  description: "",
  featureOne: "",
  featureTwo: "",
  featureThree: "",
  featureFour: "",
};

const img_hosting_token = "a272d7fb3d5b5ee711a07f62d1b2c93f";
// console.log(img_hosting_token);

const CreateFish = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [createFishIntoDb] = useCreateFishIntoDbMutation();

  const handleCreateFish = async (values: any) => {
    // console.log(values);

    // img hosting to imgbb
    const formData = new FormData();
    formData.append("image", values.image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes: any) => {
        if (imgRes.success) {
          const image = imgRes.data.display_url;
          // console.log(image);

          const newFish = {
            image: [
              image,
              "https://i.ibb.co/xzwSZj6/carp1.png",
              "https://i.ibb.co/jkM91wL/extra2.png",
            ],
            title: values.title,
            price: values.price,
            ratings: "0",
            category: values.category,
            isDiscount: values.isDiscount == "YES" ? true : false,
            discountPercentage:
              values.isDiscount == "YES" ? values.discountPercentage : "0",
            description: values.description,
            features: [
              values.featureOne,
              values.featureTwo,
              values.featureThree,
              values.featureFour,
            ],
          };
          // console.log(newFish);

          // Send new fish to database store
          try {
            const res = await createFishIntoDb(newFish).unwrap();
            console.log(res);
            if (res.success) {
              toast.success(res?.message);
            }
          } catch (error: any) {
            console.error(error.message);
          }
        }
      });
  };

  return (
    <Container
      sx={{
        margin: "32px 0px",
      }}
    >
      <div className="mb-4">
        <h2 className="text-[28px] font-semibold text-[#010937]">
          Create Fish
        </h2>
        <div className="h-[2px] w-[160px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
      </div>

      <Stack>
        <GSForm onSubmit={handleCreateFish} defaultValues={defaultProduct}>
          <Grid container spacing={2} my={2}>
            <Grid item xs={12} md={6}>
              <GSInput name="title" label="Fish Title" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSFileUploader name="image" label="Upload File" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSInput name="price" label="Fish Price" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSSelectField
                items={categoryItems}
                name="category"
                label="Select Category"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSSelectField
                items={discountItems}
                name="isDiscount"
                label="Available Discount"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSInput name="discountPercentage" label="Discount Percentage" />
            </Grid>
          </Grid>

          <Grid>
            <GSTextArea name="description" label="Title Description" />
          </Grid>

          <Box my={2}>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              Features of Fish
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <GSInput name="featureOne" />
              </Grid>
              <Grid item xs={12} md={6}>
                <GSInput name="featureTwo" />
              </Grid>
              <Grid item xs={12} md={6}>
                <GSInput name="featureThree" />
              </Grid>
              <Grid item xs={12} md={6}>
                <GSInput name="featureFour" />
              </Grid>
            </Grid>
          </Box>

          {/* submit button */}
          <Button
            sx={{
              marginY: "20px",
              fontSize: "17px",
            }}
            fullWidth={true}
            type="submit"
          >
            Create
          </Button>
        </GSForm>
      </Stack>
    </Container>
  );
};

export default CreateFish;
