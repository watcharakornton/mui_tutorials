import * as React from "react";
import MyContainer from "../component/MyContainer";
import { Typography, Avatar, Stack } from "@mui/material";

export const ImageAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        ImageAvatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="src/assets/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="src/assets/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="src/assets/images/avatar/3.jpg" />
        </Stack>
      </MyContainer>
    </>
  );
};
