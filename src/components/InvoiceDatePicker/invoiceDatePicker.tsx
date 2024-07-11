"use client";
import { Box, Stack, Typography } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { title } from "process";
import { FC } from "react";
import { palette } from "@/theme/palette";

interface InvoiceDatePicker {
  title: string;
}
const InvoiceDatePicker: FC<InvoiceDatePicker> = ({ title }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        width: 205,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Typography
        variant="body1"
        color={"black"}
        sx={{ fontSize: 10, fontWeight: 600 }}
      >
        {title}:
      </Typography>
      <Box
        sx={{
          width: 134,
          height: 24,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            defaultValue={dayjs("2024-01-Jul")}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                // border: `1px solid ${palette.borderColor.borderColor}`,
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  // border: `1px solid ${palette.color.gray[100]}`,
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: `1px solid ${palette.color.gray[500]}`,
                  borderRadius:1,
                },
              "& .MuiOutlinedInput-input": {
                padding: "3px !important",
                color: palette.base.black,
                fontSize: 12,
              },
              "& .MuiInputBase-input": {
                height: "20px !important",
              },
              padding: "0px !important",
              width: "100%",
            }}
          />
        </LocalizationProvider>
      </Box>
    </Stack>
  );
};

export default InvoiceDatePicker;