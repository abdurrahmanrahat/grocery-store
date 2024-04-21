import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TSelectFieldProps = {
  items: string[];
  name: string;
  label?: string;
  size?: "small" | "medium";
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
};

const GSSelectField = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: TSelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default GSSelectField;
