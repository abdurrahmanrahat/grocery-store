"use client";

import GSFileUploader from "@/components/Forms/GSFileUploader";
import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import GSSelectField from "@/components/Forms/GSSelectField";
import { Button, Container, Grid, Stack } from "@mui/material";

const categoryItems = ["Carp", "Haddock", "Hilsa", "Mahi", "Salmon"];

const img_hosting_token = "a272d7fb3d5b5ee711a07f62d1b2c93f";
// console.log(img_hosting_token);

const CreateFish = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleCreateFish = (values: any) => {
    console.log(values);

    // img hosting to imgbb
    const formData = new FormData();
    formData.append("image", values.image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes) => {
        if (imgRes.success) {
          const image = imgRes.data.display_url;
          // console.log(image);

          // Send new supply to database store
        }
      });
  };

  return (
    <Container
      sx={{
        margin: "32px 0px",
      }}
    >
      <div className="mb-12">
        <h2 className="text-[28px] font-semibold text-[#010937]">
          Create Fish
        </h2>
        <div className="h-[2px] w-[160px] rounded-full bg-gradient-to-r from-transparent via-[#0095CF] to-transparent"></div>
      </div>

      <Stack>
        <GSForm onSubmit={handleCreateFish} defaultValues={{}}>
          <Grid container spacing={2} my={2}>
            <Grid item md={6}>
              <GSInput name="title" label="Fish Title" />
            </Grid>
            <Grid item md={6}>
              <GSFileUploader name="image" label="Upload File" />
            </Grid>
            <Grid item md={6}>
              <GSInput name="price" label="Fish Price" />
            </Grid>
            <Grid item md={6}>
              <GSSelectField
                items={categoryItems}
                name="category"
                label="Select Category"
              />
            </Grid>
          </Grid>

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
