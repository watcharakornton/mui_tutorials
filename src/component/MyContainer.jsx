import * as React from "react";
import { Box } from "@mui/material";

const MyContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        py: "40px",
        border: "1px solid rgba(61, 71, 81, 0.3)",
        borderRadius: "12px 12px 0 0",
        backgroundColor: "rgba(29, 33, 38, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default MyContainer;
