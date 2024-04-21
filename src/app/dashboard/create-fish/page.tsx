"use client";

import GSForm from "@/components/Forms/GSForm";
import GSInput from "@/components/Forms/GSInput";
import { Container, Grid, Stack } from "@mui/material";

const CreateFish = () => {
  const handleCreateFish = (values: any) => {
    console.log(values);
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
          </Grid>
        </GSForm>
      </Stack>
    </Container>
  );
};

export default CreateFish;
