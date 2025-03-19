import * as React from "react";
import { Typography, Box } from "@mui/material";

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

export const ImageAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        ImageAvatars
      </Typography>
      <MyContainer></MyContainer>
    </>
  );
};
