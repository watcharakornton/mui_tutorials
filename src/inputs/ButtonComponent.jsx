import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { styled, useTheme } from '@mui/material/styles'
import {
    Stack,
    Box,
    Button,
    IconButton,
    Tooltip,
    Badge,
    badgeClasses,
    FormControlLabel,
    Switch,
    Typography
} from '@mui/material';
import {
    Delete as DeleteIcon,
    Send as SendIcon,
    Alarm as AlarmIcon,
    AddShoppingCart as AddShoppingCartIcon,
    ShoppingCart as ShoppingCartIcon,
    ShoppingCartOutlined as ShoppingCartOutlinedIcon,
    Fingerprint,
    CloudUpload as CloudUploadIcon,
    Save as SaveIcon,
} from '@mui/icons-material';
import { purple } from '@mui/material/colors';

export const CustomizedButtons = () => {
    const theme = useTheme();
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segeo UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segeo UI Emoji"',
            '"Segeo UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5',
        },
    });

    const ColorButton = styled(Button)({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    });

    return (
        <MyContainer title="Customized Buttons">
            <Stack spacing={2} direction="row">
                <ColorButton variant="contained">Custom CSS</ColorButton>
                <BootstrapButton variant="contained" disableRipple>
                    Bootstrap
                </BootstrapButton>
            </Stack>
        </MyContainer>
    );
}

export const LoadingButtonsTransition = () => {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }

    return (
        <MyContainer title="Loading Buttons Transition">
            <div>
                <FormControlLabel
                    sx={{ display: 'block' }}
                    control={
                        <Switch
                            checked={loading}
                            onChange={() => setLoading(!loading)}
                            name="loading"
                            color="primary"
                        />
                    }
                    label="Loading"
                />
                <Box sx={{ '& > button': { m: 1 } }}>
                    <Button
                        size="small"
                        onClick={handleClick}
                        loading={loading}
                        variant="outlined"
                        disabled
                    >
                        Disabled
                    </Button>
                    <Button
                        size="small"
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                    >
                        Fetch data
                    </Button>
                    <Button
                        size="small"
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </Button>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={handleClick}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </Button>
                </Box>
                <Box sx={{ '& > button': { m: 1 } }}>
                    <Button
                        onClick={handleClick}
                        loading={loading}
                        variant="outlined"
                        disabled
                    >
                        Disabled
                    </Button>
                    <Button
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                    >
                        Fetch data
                    </Button>
                    <Button
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </Button>
                    <Button
                        color="secondary"
                        onClick={handleClick}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </Button>
                </Box>
            </div>
        </MyContainer>
    )
}

export const InputFileUpload = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'react(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <MyContainer title="Input File Upload">
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
            </Button>
        </MyContainer>
    )
}

export const IconButtonWithBadge = () => {
    const CartBadge = styled(Badge)`
        & .${badgeClasses.badge} {
            top: -12px;
            right: -6px;
        }
    `;

    return (
        <MyContainer title="Icon Button with Badge">
            <IconButton>
                <ShoppingCartOutlinedIcon fontSize="small" />
                <CartBadge badgeContent={2} color="primary" overlap="circular" />
            </IconButton>
        </MyContainer>
    )
}

export const LoadingIconButton = () => {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
        <MyContainer title="Loading Icon Button">
            <Tooltip title="Cleck to see loading">
                <IconButton onClick={() => setLoading(true)} loading={loading}>
                    <ShoppingCartIcon />
                </IconButton>
            </Tooltip>
        </MyContainer>
    );
}

export const IconButtonColors = () => {
    return (
        <MyContainer title="Icon Button Colors">
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
            </Stack>
        </MyContainer>
    )
}

export const IconButtonSizes = () => {
    return (
        <MyContainer title="Icon Button Sizes">
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
        </MyContainer>
    )
}

export const IconButtons = () => {
    return (
        <MyContainer title="Icon Buttons">
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add on alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>
        </MyContainer>
    )
}

export const IconLabelButtons = () => {
    return (
        <MyContainer title="Icon Label Buttons">
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" startIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </MyContainer>
    )
}

export const ButtonSizes = () => {
    return (
        <MyContainer title="Buttons Sizes">
            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
            </Box>
        </MyContainer>
    )
}

export const BasicButtons = () => {
    return (
        <MyContainer title="Basic Buttons">
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </MyContainer>
    )
}

export const TextButtons = () => {
    return (
        <MyContainer title="Texts Buttons">
            <Stack spacing={2} direction="row">
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Stack>
        </MyContainer>
    )
}

export const ColorButtons = () => {
    return (
        <MyContainer title="Color Buttons">
            <Stack spacing={2} direction="row">
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
            </Stack>
        </MyContainer>
    )
}