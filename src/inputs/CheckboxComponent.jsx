import * as React from 'react';
import {
    Box,
    Checkbox,
    Typography,
    FormGroup,
    FormControlLabel
} from '@mui/material';
import {
    FavoriteBorder,
    Favorite,
    BookmarkBorder as BookmarkBorderIcon,
    Bookmark as BookmarkIcon,
} from '@mui/icons-material';
import { pink, green } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const IndeterminateCheckbox = () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    }

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
    );

    return (
        <div>
            <Typography variant='body1' sx={{ mb: 3 }}>Indeterminate Checkbox</Typography>
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
            <Typography variant='body1' sx={{ mb: 3 }}>Icon Checkboxes</Typography>
            <Checkbox
                {...label} icon={<FavoriteBorder />} 
                checkedIcon={<Favorite />}
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600]
                    },
                }}
            />
            <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                sx={{
                    color: green[800],
                    '&.Mui-checked': {
                        color: green[600]
                    },
                }}
            />
        </div>
    );
}

export const ColorCheckboxes = () => {
    return (
        <div>
            <Typography variant='body1' sx={{ mb: 3 }}>Color Checkboxes</Typography>
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
            <Typography variant='body1' sx={{ mb: 3 }}>Size Checkboxes</Typography>
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
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Checkbox Labels</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </>
    )
}

export const Checkboxes = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Checkboxes</Typography>
            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </div>
        </>
    )
}
