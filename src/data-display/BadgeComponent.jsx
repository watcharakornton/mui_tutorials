import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MyContainer from "../component/MyContainer";
import { Typography, Badge, Stack, IconButton } from "@mui/material";
import {
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

export const CustomizedBadge = () => {
  const theme = useTheme();
  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  });

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Customized Badge
      </Typography>
      <MyContainer>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </MyContainer>
    </>
  );
};

export const ColorBadge = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Color Badge
      </Typography>
      <MyContainer>
        <Stack spacing={2} direction="row">
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </MyContainer>
    </>
  );
};

export const SimpleBadge = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Simple Badge
      </Typography>
      <MyContainer>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </MyContainer>
    </>
  );
};
