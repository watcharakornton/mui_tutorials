import * as React from "react";
import {
  Typography,
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatColorFill as FormatColorFillIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  ViewQuilt as ViewQuiltIcon,
} from "@mui/icons-material";

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

export const ToggleButtonNotEmpty = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        ToggleButtonNotEmpty
      </Typography>
      <MyContainer></MyContainer>
    </>
  );
};

export const VerticalToggleButtons = () => {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Vertical Toggle Buttons
      </Typography>
      <MyContainer>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="quilt" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </MyContainer>
    </>
  );
};

export const ColorToggleButton = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Color Toggle Button
      </Typography>
      <MyContainer>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </MyContainer>
    </>
  );
};

export const ToggleButtonSizes = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Toggle Button Sizes
      </Typography>
      <MyContainer>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <ToggleButtonGroup size="small" {...control} aria-label="Small size">
            {children}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...control} aria-label="Medium size">
            {children}
          </ToggleButtonGroup>
          <ToggleButtonGroup size="large" {...control} aria-label="Large size">
            {children}
          </ToggleButtonGroup>
        </Stack>
      </MyContainer>
    </>
  );
};

export const ToggleButtonMultiple = () => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Toggle Button Multiple
      </Typography>
      <MyContainer>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </MyContainer>
    </>
  );
};

export const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Toggle Buttons
      </Typography>
      <MyContainer>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </MyContainer>
    </>
  );
};
