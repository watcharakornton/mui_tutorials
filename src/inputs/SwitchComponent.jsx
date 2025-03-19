import * as React from "react";
import { Typography, Switch, FormGroup, FormControlLabel } from "@mui/material";

const label = [
  { inputProps: { "aria-label": "Switch demo" } },
  { inputProps: { "aria-label": "Size switch demo" } },
];

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
