import React from 'react'
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SwitchComponent = () => {
    return (
        <div>
            <Box paddingY={3}>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} disabled defaultChecked />
                <Switch {...label} disabled />
            </Box>
            <Box paddingY={3}>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                    <FormControlLabel required control={<Switch />} label="Required" />
                    <FormControlLabel disabled control={<Switch />} label="Disabled" />
                </FormGroup>
            </Box>
            <Box paddingY={3}>
                <Switch {...label} defaultChecked size="small" />
                <Switch {...label} defaultChecked />
            </Box>
            <Box paddingY={3}>
                <Switch {...label} defaultChecked />
                <Switch {...label} defaultChecked color="secondary" />
                <Switch {...label} defaultChecked color="warning"/>
                <Switch {...label} defaultChecked color="default"/>
                <Switch {...label} defaultChecked />
            </Box>
        </div>
    )
}

export default SwitchComponent