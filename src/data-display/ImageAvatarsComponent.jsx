import * as React from "react";
import MyContainer from "../component/MyContainer";
import { Typography, Avatar, Stack } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const BackgroundLetterAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Background Letter Avatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar("Kent Dodds")} />
          <Avatar {...stringAvatar("Jed Watson")} />
          <Avatar {...stringAvatar("Tim Neutkens")} />
        </Stack>
      </MyContainer>
    </>
  );
};

export const LetterAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Letter Avatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </MyContainer>
    </>
  );
};

export const ImageAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Image Avatars
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
