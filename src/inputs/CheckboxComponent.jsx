import * as React from 'react';
import {
    Box,
    Checkbox,
    Typography,
    FormGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material';
import {
    FavoriteBorder,
    Favorite,
    BookmarkBorder as BookmarkBorderIcon,
    Bookmark as BookmarkIcon,
} from '@mui/icons-material';
import { pink, green } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CustomizedCheckbox = () => {
    const theme = useTheme();

    const BpIcon = styled('span')({
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
            outline: '2px auto rgba(19, 124, 189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
            ...theme.applyStyles('dark', {
                backgroundColor: '#30404d',
            }),
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
            ...theme.applyStyles('dark', {
                background: 'rgba(57,75,89,.5)',
            }),
        },
        ...theme.applyStyles('dark', {
            boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
            backgroundColor: '#394b59',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
        }),
    });

    const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&::before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    });

    function BpCheckbox(props) {
        return (
            <Checkbox
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
                disableRipple
                color="default"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ 'aria-label': 'Checkbox demo' }}
                {...props}
            />
        );
    }

    return (
        <div>
            <Typography variant='body1' sx={{ mb: 3 }}>CustomizedCheckbox</Typography>
            <BpCheckbox />
            <BpCheckbox defaultChecked />
            <BpCheckbox disabled />
        </div>
    )
}

export const FormControlLabelPosition = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Form Control Label Position</Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Button"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </>
    );
}

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
