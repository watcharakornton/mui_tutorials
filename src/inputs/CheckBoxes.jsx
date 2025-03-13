import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import { pink } from '@mui/material/colors';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import Box from '@mui/material/Box';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckboxesGroup = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
            <FormControl
                required
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>You can display an error</FormHelperText>
            </FormControl>
        </Box>
    );
}

export const IndeterminateCheckbox = () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
        </Box>
    )

    return (
        <div>
            <FormControlLabel
                label="Parent"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                }
            />
            {children}
        </div>
    );
}

export const IconCheckboxes = () => {
    return (
        <div>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            />
        </div>
    )
}

export const ColorCheckboxes = () => {
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked color="default" />
            <Checkbox
                {...label}
                defaultChecked
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />
        </div>
    );
}

export const SizeCheckboxes = () => {
    return (
        <div>
            <Checkbox {...label} defaultChecked size="small" />
            <Checkbox {...label} defaultChecked />
            <Checkbox
                {...label}
                defaultChecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
        </div>
    );
}

export const CheckboxLabels = () => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
    )
}

export const CheckBoxes = () => {
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </div>
    );
}
