import * as React from "react";
import MyContainer from "../component/MyContainer";
import { Typography, Avatar, Stack, AvatarGroup } from "@mui/material";
import { deepOrange, deepPurple, green, pink } from "@mui/material/colors";
import {
  Pageview as PageviewIcon,
  Assignment as AssignmentIcon,
  Folder as FolderIcon,
} from "@mui/icons-material";

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

export const TotalAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Total Avatars
      </Typography>
      <MyContainer>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="src/assets/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="src/assets/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="src/assets/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="src/assets/images/avatar/5.jpg" />
        </AvatarGroup>
      </MyContainer>
    </>
  );
};

export const GroupAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Group Avatars
      </Typography>
      <MyContainer>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="src/assets/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="src/assets/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="src/assets/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="src/assets/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="src/assets/images/avatar/5.jpg" />
        </AvatarGroup>
      </MyContainer>
    </>
  );
};

export const FallbackAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Fallback Avatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" src="" />
          <Avatar />
        </Stack>
      </MyContainer>
    </>
  );
};

export const VariantAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Variant Avatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
            N
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
        </Stack>
      </MyContainer>
    </>
  );
};

export const IconAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        IconAvatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <PageviewIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>
        </Stack>
      </MyContainer>
    </>
  );
};

export const SizeAvatars = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Size Avatars
      </Typography>
      <MyContainer>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="src/assets/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <Avatar alt="Remy Sharp" src="src/assets/images/avatar/1.jpg" />
          <Avatar
            alt="Remy Sharp"
            src="src/assets/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
      </MyContainer>
    </>
  );
};

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
