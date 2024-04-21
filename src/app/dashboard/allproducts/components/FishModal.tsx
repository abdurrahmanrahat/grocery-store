import GSFileUploader from "@/components/Forms/GSFileUploader";
import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import GSSelectField from "@/components/Forms/GSSelectField";
import GSTextArea from "@/components/Forms/GSTextArea";
import GSFullScreenModal from "@/components/Shared/Modals/GSFullScreenModal";
import { useUpdateFishIntoDbMutation } from "@/redux/api/fishApi";
import { TFish } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fishId: string;
  fish: TFish;
};

const categoryItems = ["Carp", "Haddock", "Hilsa", "Mahi", "Salmon"];
const discountItems = ["YES", "NO"];

const img_hosting_token = "a272d7fb3d5b5ee711a07f62d1b2c93f";

const FishModal = ({ open, setOpen, fishId, fish }: TModalProps) => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [updateFishIntoDb] = useUpdateFishIntoDbMutation();

  const handleUpdateFish = async (values: any) => {
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

          const updatedFish = {
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
          //   console.log(updatedFish);

          // update fish to database store
          try {
            const res = await updateFishIntoDb({
              fishId,
              updatedFish,
            }).unwrap();
            // console.log(res);
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
    <GSFullScreenModal open={open} setOpen={setOpen} title="Edit Fish">
      <GSForm onSubmit={handleUpdateFish} defaultValues={fish}>
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
              defaultValue={fish.isDiscount === true ? "YES" : "NO"}
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
              <GSInput name="features.one" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSInput name="features.two" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSInput name="features.three" />
            </Grid>
            <Grid item xs={12} md={6}>
              <GSInput name="features.four" />
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
          onClick={() => setOpen(false)}
        >
          Update Fish
        </Button>
      </GSForm>
    </GSFullScreenModal>
  );
};

export default FishModal;
