"use client";
import { Box, Stack, Typography } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { FC, useState } from "react";
import { palette } from "@/theme/palette";
import { useDispatch, useSelector } from "react-redux";
import {
  getDueDate,
  getInvoiceDate,
  setDueDate,
  setInvoiceDate,
} from "@/redux/features/invoiceSlice";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface InvoiceDatePicker {
  title: string;
}
const InvoiceDatePicker: FC<InvoiceDatePicker> = ({ title }) => {
  const dispatch = useDispatch();
  const invoiceDate = useSelector(getInvoiceDate);
  const dueDate = useSelector(getDueDate);
  // const [value, setValue] = useState<Dayjs | null>(
  //   dayjs("2024-07-25T07:00:00.000Z")
  // );
  // console.log(value?.toISOString(), "valueDat");
  console.log(new Date().toISOString(), "dd");
  const handleDateChange = (newDate: Dayjs | null) => {
    console.log(newDate, "newDte");
    if (newDate) {
      const date = newDate?.toISOString();
      title === "Invoice Date"
        ? dispatch(setInvoiceDate(date))
        : dispatch(setDueDate(date));
    }
  };

  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        // backgroundColor:'skyblue',
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
          width: "134px !important",
          height: 24,
          // backgroundColor: "skyblue",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            value={
              title === "Invoice Date" ? dayjs(invoiceDate) : dayjs(dueDate)
            }
            onChange={handleDateChange}
            format="MMM Do, YYYY"
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
                  // border: `1px solid ${palette.color.gray[500]}`,
                  borderRadius: 1,
                  width: "144px !important",
                },
              "& .MuiOutlinedInput-input": {
                padding: "1px !important",
                paddingLeft: "7px !important",
                // color: palette.color.gray[800],
                fontSize: 12,
              },
              "& .MuiInputBase-input": {
                height: "20px !important",
                width: "134px !important",
              },
              padding: "0px !important",
              // width: "100% !important",

              "& .MuiOutlinedInput-root": {
                border: "0.5px !important",
                borderRadius: "5px",
                width: "134px !important",
                paddingRight:0,
                px:"4px",
                py:"2px",
              },
            }}
          />
          
        </LocalizationProvider>
      </Box>
    </Stack>
  );
};

export default InvoiceDatePicker;
