"use client";
import {
  Stack,
  Typography,
  TextField as MuiTextField,
  SxProps,
} from "@mui/material";
import { ChangeEvent, FC } from "react";

interface TextField {
  label?: string;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  helperText?: any;
  onBlur?: any;
  error?: any;
}
const TextField: FC<TextField> = ({
  label,
  name,
  size = "medium",
  sx,
  onChange,
  value,
  helperText,
  onBlur,
  error,
  ...props
}) => {
  return (
    <Stack direction={"column"}>
      <Typography variant="text-sm-medium" sx={{ marginBottom: "5px" }}>
        {label}
      </Typography>
      <MuiTextField
        size="small"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        sx={
          size === "large"
            ? {
                "& .MuiInputBase-input": {
                  height: "48px",
                  borderRadius: "8px",
                },
                ...sx,
              }
            : size === "medium"
            ? {
                "& .MuiInputBase-input": {
                  height: "32px",
                  borderRadius: "2px",
                },
                ...sx,
              }
            : size === "small"
            ? {
                ...sx,
              }
            : {
                ...sx,
              }
        }
        id="outlined-basic"
        placeholder={label}
        variant="outlined"
      />
    </Stack>
  );
};

export default TextField;
