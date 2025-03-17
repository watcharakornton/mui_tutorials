import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Rating,
    Typography,
    Stack,
} from '@mui/material';
import {
    Star as StarIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';

export const CustomizedRating = () => {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Customized Rating</Typography>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Custom icon and color</Typography>
                <StyledRating 
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <Typography component="legend">10 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={10} />
            </Box>
        </>
    );
}

export const RatingSize = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Rating Size</Typography>
            <Stack spacing={1}>
                <Rating name="size-small" defaultValue={2} size="small" />
                <Rating name="size-medium" defaultValue={2} />
                <Rating name="size-large" defaultValue={2} size="large" />
            </Stack>
        </>
    )
}

export const HoverRating = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Hover Rating</Typography>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
        </>
    );
}

export const HalfRating = () => {
    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Half Rating</Typography>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
        </>
    )
}

export const BasicRating = () => {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Typography variant='body1' sx={{ mb: 3 }}>Basic Rating</Typography>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Uncontrolled</Typography>
                <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                        console.log(newValue);
                    }}
                    defaultValue={2}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>
        </>
    );
}
