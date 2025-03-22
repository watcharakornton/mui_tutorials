import * as React from 'react';
import MyContainer from '../component/MyContainer';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
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
    SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
    SentimentDissatisfied as SentimentDissatisfiedIcon,
    SentimentSatisfied as SentimentSatisfiedIcon,
    SentimentSatisfiedAltOutlined as SentimentSatisfiedAltIcon,
    SentimentVerySatisfied as SentimentVerySatisfiedIcon,
} from '@mui/icons-material';

export const RadioGroupRating = () => {
    const theme = useTheme();

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
            color: theme.palette.action.disabled,
        },
    });

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon color="error" />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon color="error" />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="success" />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" />,
            label: 'Very Satisfied',
        },
    };

    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>
    }

    IconContainer.propTypes = {
        value: PropTypes.number.isRequired
    }

    return (
        <MyContainer title="Radio Group Rating">
            <StyledRating 
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
            />
        </MyContainer>
    )
}

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
        <MyContainer title="Customized Rating">
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
        </MyContainer>
    );
}

export const RatingSize = () => {
    return (
        <MyContainer title="Rating Size">
            <Stack spacing={1}>
                <Rating name="size-small" defaultValue={2} size="small" />
                <Rating name="size-medium" defaultValue={2} />
                <Rating name="size-large" defaultValue={2} size="large" />
            </Stack>
        </MyContainer>
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
        <MyContainer title="Hover Rating">
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
        </MyContainer>
    );
}

export const HalfRating = () => {
    return (
        <MyContainer title="Half Rating">
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
        </MyContainer>
    )
}

export const BasicRating = () => {
    const [value, setValue] = React.useState(2);

    return (
        <MyContainer title="Basic Rating">
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
        </MyContainer>
    );
}
