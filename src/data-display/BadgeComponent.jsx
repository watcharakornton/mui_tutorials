import * as React from "react";
import MyContainer from "../component/MyContainer";
import { styled, useTheme } from "@mui/material/styles";
import {
  Add as AddIcon,
  Mail as MailIcon,
  Remove as RemoveIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

export const BadgeAlignment = () => {
  const [horizontal, setHorizontal] = React.useState("right");
  const [vertical, setVertical] = React.useState("top");

  const handleHorizontalChange = (event) => {
    setHorizontal(event.target.value);
  };

  const handleVerticalChange = (event) => {
    setVertical(event.target.value);
  };

  const jsx = `
  <Badge
    anchorOrigin={{
    vertical: '${vertical}',
    horizontal: '${horizontal},
    }}
  >
  `;

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Badge Alignment
      </Typography>
      <MyContainer>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& fieldset": {
                margin: 3,
              },
            }}
          >
            <FormControl component="fieldset">
              <FormLabel component="legend">Vertical</FormLabel>
              <RadioGroup
                name="vertical"
                value={vertical}
                onChange={handleVerticalChange}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel
                  value="bottom"
                  control={<Radio />}
                  label="Bottom"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Horizontal</FormLabel>
              <RadioGroup
                name="horizontal"
                value={horizontal}
                onChange={handleHorizontalChange}
              >
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label="Right"
                />
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label="Left"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "action.active",
              "& > *": {
                margin: 2,
              },
            }}
          >
            <Badge
              color="secondary"
              variant="dot"
              badgeContent={1}
              anchorOrigin={{
                horizontal,
                vertical,
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              color="secondary"
              badgeContent={1}
              anchorOrigin={{
                horizontal,
                vertical,
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              color="secondary"
              badgeContent={12}
              anchorOrigin={{
                horizontal,
                vertical,
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              color="secondary"
              badgeContent={123}
              anchorOrigin={{
                horizontal,
                vertical,
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              color="secondary"
              max={999}
              badgeContent={1337}
              anchorOrigin={{
                horizontal,
                vertical,
              }}
            >
              <MailIcon />
            </Badge>
          </Box>
        </Box>
      </MyContainer>
    </>
  );
};

export const BadgeOverlap = () => {
  const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: "50%" };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Badge Overlap
      </Typography>
      <MyContainer>
        <Stack spacing={3} direction="row">
          <Badge color="secondary" badgeContent=" ">
            {rectangle}
          </Badge>
          <Badge color="secondary" badgeContent=" " variant="dot">
            {rectangle}
          </Badge>
          <Badge color="secondary" overlap="circular" badgeContent=" ">
            {circle}
          </Badge>
          <Badge
            color="secondary"
            overlap="circular"
            badgeContent=" "
            variant="dot"
          >
            {circle}
          </Badge>
        </Stack>
      </MyContainer>
    </>
  );
};

export const DotBadge = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Dot Badge
      </Typography>
      <MyContainer>
        <Box sx={{ color: "action.active" }}>
          <Badge color="secondary" variant="dot">
            <MailIcon />
          </Badge>
        </Box>
      </MyContainer>
    </>
  );
};

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
