"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC, useRef, useState } from "react";
import { Icon } from "../Icon";
import { palette } from "@/theme/palette";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceLogo, setInvoiceLogo } from "@/redux/features/invoiceSlice";

interface UploadLogoProps {
  logoDesc: string;
}

const UploadLogo: FC<UploadLogoProps> = ({ logoDesc }) => {
  const dispatch = useDispatch();
  const invoiceLogo = useSelector(getInvoiceLogo);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // setSelectedFile(file);
      dispatch(setInvoiceLogo(file));
    }
  };

  // const handleFileUpload = (file: File) => {
  //   console.log("File uploaded:", file);
  // };

  return (
    <Box
      borderRadius={1}
      sx={{
        border: "1px dashed",
        padding: 1,
        width: 200,
        height: 56,
        cursor: "pointer",
        borderColor: palette.base.dashedBorderColor,
      }}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {invoiceLogo ? (
        <Box
          sx={{ position: "relative", alignItems: "center", display: "flex" }}
        >
          <img
            src={URL.createObjectURL(invoiceLogo)}
            alt="Selected Logo"
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
          />
          <Typography
            sx={{ marginLeft: "10px" }}
            variant="caption"
            color={"gray"}
          >
            Logo
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "white",
              padding: 0.5,
            }}
            // onClick={handleClick}
          >
            <EditIcon
              sx={{
                width: "20px",
                height: "20px",
                color: palette.color.gray[300],
              }}
            />
            {/* <Icon icon="edit" width={20} height={20} /> */}
          </IconButton>
        </Box>
      ) : (
        <Stack direction={"row"} spacing={1}>
          <Icon icon="uploadLogo" height={31} width={34} />
          <Stack direction={"column"} spacing={1}>
            <Typography variant="caption" color={"gray"}>
              {logoDesc}
            </Typography>
            <Typography
              variant="caption"
              color={"black"}
              sx={{ textDecoration: "underline" }}
            >
              Select a file
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default UploadLogo;
