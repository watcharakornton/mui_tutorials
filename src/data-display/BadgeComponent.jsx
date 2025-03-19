import * as React from "react";
import MyContainer from "../component/MyContainer";
import { Typography } from "@mui/material";

export const SimpleBadge = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Simple Badge
      </Typography>
      <MyContainer></MyContainer>
    </>
  );
};
