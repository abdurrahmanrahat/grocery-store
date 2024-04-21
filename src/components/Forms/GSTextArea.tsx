import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
};

const GSTextArea = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = true,
  sx,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={4}
          type={type}
          size={size}
          fullWidth={fullWidth}
          required={required}
        />
      )}
    />
  );
};

export default GSTextArea;
