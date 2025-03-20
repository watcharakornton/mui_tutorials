import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MyContainer from "../component/MyContainer";
import {
  Typography,
  Badge,
  Stack,
  IconButton,
  ButtonGroup,
  Button,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";

export const BadgeMax = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Badge Max
      </Typography>
      <MyContainer>
        <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
          <Badge color="secondary" badgeContent={99}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={100}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={1000} max={999}>
            <MailIcon />
          </Badge>
        </Stack>
      </MyContainer>
    </>
  );
};

export const ShowZeroBadge = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Show Zero Badge
      </Typography>
      <MyContainer>
        <Stack spacing={4} direction="row" sx={{ color: "action.acitve" }}>
          <Badge color="secondary" badgeContent={0}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={0} showZero>
            <MailIcon />
          </Badge>
        </Stack>
      </MyContainer>
    </>
  );
};

export const BadgeVisibility = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Badge Visibility
      </Typography>
      <MyContainer>
        <Box
          sx={{
            color: "action.acitve",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              marginBottom: 2,
            },
            "& .MuiBadge-root": {
              marginRight: 4,
            },
          }}
        >
          <div>
            <Badge color="secondary" badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: "text.primary" }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
              label="Show Badge"
            />
          </div>
        </Box>
      </MyContainer>
    </>
  );
};

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
