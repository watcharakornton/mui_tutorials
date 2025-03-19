import * as React from "react";
import {
  Typography,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const label = [
  { inputProps: { "aria-label": "Switch demo" } },
  { inputProps: { "aria-label": "Size switch demo" } },
  { inputProps: { "aria-label": "Color switch demo" } },
];

export const SwitchesGroup = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Switches Group
      </Typography>
      <FormControl component="fiedset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.jason}
                onChange={handleChange}
                name="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </>
  );
};

export const ColorSwitches = () => {
  const theme = useTheme();

  const PinkSwitch = styled(Switch)({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  });

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Color Switches
      </Typography>
      <div>
        <Switch {...label[2]} defaultChecked />
        <Switch {...label[2]} defaultChecked color="secondary" />
        <Switch {...label[2]} defaultChecked color="warning" />
        <Switch {...label[2]} defaultChecked color="default" />
        <PinkSwitch {...label[2]} defaultChecked />
      </div>
    </>
  );
};

export const SwitchesSizes = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Switches Sizes
      </Typography>
      <div>
        <Switch {...label[1]} defaultChecked size="small" />
        <Switch {...label[1]} defaultChecked />
      </div>
    </>
  );
};

export const SwitchLabels = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Switch Labels
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </>
  );
};

export const BasicSwitches = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Basic Switches
      </Typography>
      <div>
        <Switch {...label[0]} defaultChecked />
        <Switch {...label[0]} />
        <Switch {...label[0]} disabled defaultChecked />
        <Switch {...label[0]} disabled />
      </div>
    </>
  );
};
