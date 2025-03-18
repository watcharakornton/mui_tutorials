import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  Stack,
  Slider,
  Input as MuiInput,
  Grid,
} from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valueText(value) {
  return `${value}°C`;
}

export const InputSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Input Slider
      </Typography>
      <Box sx={{ width: 250, mx: "auto" }}>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2} sx={{ alignIems: "center" }}>
          <Grid item>
            <VolumeUp />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const MinimumDistanceSlider = () => {
  const minDistance = 10;
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Minimum Distance Slider
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          disableSwap
        />
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          disabledSwap
        />
      </Box>
    </>
  );
};

export const RangeSlider = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Range Slider
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
        />
      </Box>
    </>
  );
};

export const DiscreteSliderLabel = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Discrete Slider Label
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valueText}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Box>
    </>
  );
};

export const DiscreteSliderValues = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Discrete Slider Values
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={20}
          getAriaValueText={valueText}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    </>
  );
};

export const DiscreteSliderMarks = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Discrete Slider Marks
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valueText}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    </>
  );
};

export const DiscreteSliderSteps = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Discrete Slider Steps
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          aria-label="Small steps"
          defaultValue={0.00000005}
          getAriaValueText={valueText}
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export const DiscreteSlider = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Discrete Slider
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valueText}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
    </>
  );
};

export const SliderSizes = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Slider Sizes
      </Typography>
      <Box sx={{ width: 300, mx: "auto" }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export const ContinuousSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Continuous Slider
      </Typography>
      <Box sx={{ width: 200, mx: "auto" }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
    </>
  );
};
