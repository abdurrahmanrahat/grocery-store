"use client";

import { Button, Grid } from "@mui/material";
import GSForm from "../Forms/GSForm";
import GSInput from "../Forms/GSInput";

const shippingFormDefaultValues = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  apartmentNumber: "",
  state: "",
  zip: "",
};

const ShippingForm = () => {
  const handleShippingAddressForm = (values: any) => {
    console.log(values);
  };

  return (
    <GSForm
      onSubmit={handleShippingAddressForm}
      defaultValues={shippingFormDefaultValues}
    >
      <Grid container spacing={2} my={2}>
        <Grid item xs={12} md={6}>
          <GSInput name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <GSInput name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12} md={12}>
          <GSInput name="streetAddress" label="Street Address" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GSInput name="apartmentNumber" label="Apartment Number" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GSInput name="state" label="State" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GSInput name="zip" label="Zip" />
        </Grid>
      </Grid>

      {/* submit button */}
      <Button
        sx={{
          fontSize: "17px",
          fontWeight: "500",
          borderRadius: "40px",
          background: "#000",
          marginTop: "16px",
        }}
        fullWidth={true}
        type="submit"
      >
        Save Address
      </Button>
    </GSForm>
  );
};

export default ShippingForm;
