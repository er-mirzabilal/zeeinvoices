import { palette } from "@/theme/palette";
import { Box } from "@mui/material";
import { FC } from "react";

const InvoiceSettings: FC = () => {
  return (
    <Box
      borderRadius={3}
      sx={{ width: 357, height:776, backgroundColor: palette.base.white, 
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
       }}
    ></Box>
  );
};

export default InvoiceSettings;