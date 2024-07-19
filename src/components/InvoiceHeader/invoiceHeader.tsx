"use client";
import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfView } from "@/Pages/PdfView";

interface InvoiceHeaderProps {
  invoiceName: string;
  InvSetting: any;
  InvDetails: any;
  summaryDetail:any;
}
const InvoiceHeader: FC<InvoiceHeaderProps> = ({
  invoiceName,
  InvSetting,
  InvDetails,
  summaryDetail
}) => {
  
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ marginTop: "5%" }}
    >
      <Typography variant="display-xs-medium">
        Invoice: {invoiceName}
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
        <Button variant="outlined">Save</Button>
        <PDFDownloadLink
          document={<PdfView invSetting={InvSetting} invDetails={InvDetails} Summary={summaryDetail} />}
          fileName="ZeeInvoices"
        >
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <Button variant="contained">Download PDF</Button>
            )
          }
        </PDFDownloadLink>
      </Stack>
    </Stack>
  );
};

export default InvoiceHeader;
