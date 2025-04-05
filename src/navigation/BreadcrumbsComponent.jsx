import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { emphasize, styled } from '@mui/material/styles';
import {
    Typography,
    Breadcrumbs,
    Link,
    Stack,
    Menu,
    MenuItem,
    IconButton,
    Chip,
} from '@mui/material/';

import {
    NavigateNext as NavigateNextIcon,
    Home as HomeIcon,
    Grain as GrainIcon,
    Whatshot as WhatshotIcon,
    MoreHoriz as MoreHorizIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: (theme.vars || theme).palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(theme.palette.grey[100], 0.06),
            ...theme.applyStyles('dark', {
                backgroundColor: emphasize(theme.palette.grey[800], 0.06),
            }),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[100], 0.12),
            ...theme.applyStyles('dark', {
                backgroundColor: emphasize(theme.palette.grey[800], 0.12),
            }),
        },
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    };
});

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export const CustomizedBreadcrumbs = () => {
    return (
        <MyContainer title="Customized Breadcrumbs">
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Home"
                        icon={<HomeIcon fontSize="small" />}
                    />
                    <StyledBreadcrumb component="a" href="#" label="Catalog" />
                    <StyledBreadcrumb
                        label="Accessories"
                        deleteIcon={<ExpandMoreIcon />}
                        onDelete={handleClick}
                    />
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}

export const CondensedWithMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (event) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MyContainer title="Condensed With Menu">
            <React.Fragment>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='with-menu-demo-breadcrumbs'
                >
                    <MenuItem onClick={handleClose}>Breadcrumb 2</MenuItem>
                    <MenuItem onClick={handleClose}>Breadcrumb 3</MenuItem>
                    <MenuItem onClick={handleClose}>Breadcrumb 4</MenuItem>
                </Menu>
                <Breadcrumbs aria-label="breadcrumbs">
                    <Link color="primary" href="#condensed-with-menu">
                        Breadcrumb 1
                    </Link>
                    <IconButton color="primary" size="small" onClick={handleClick}>
                        <MoreHorizIcon />
                    </IconButton>
                    <Link color="primary" href="#condensed-with-menu">
                        Breadcrumb 5
                    </Link>
                    <Link color="primary" href="#condensed-with-menu">
                        Breadcrumb 6
                    </Link>
                </Breadcrumbs>
            </React.Fragment>
        </MyContainer>
    )
}

export const CollapseBreadcrumbs = () => {
    return (
        <MyContainer title="Collapse Breadcrumbs">
            <div rolw="presentation" onClick={handleClick}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Catalog
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Accessories
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        New Collection
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Belts</Typography>
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}

export const IconBreadcrumbs = () => {
    return (
        <MyContainer title="Icon Breadcrumbs">
            <div role="presentaion" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline='hover'
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        MUI
                    </Link>
                    <Link
                        underline='hover'
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Core
                    </Link>
                    <Typography
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Breadcrumb
                    </Typography>
                </Breadcrumbs>
            </div>

        </MyContainer>
    )
}

export const CustomSeparator = () => {
    const breadcrumbs = [
        <Link underline='hover' key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Breadcrumb
        </Typography>,
    ];

    return (
        <MyContainer title="Custom Separator">
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

        </MyContainer>
    )
}

export const ActiveLastBreadcrumb = () => {
    return (
        <MyContainer title="Active Last Breadcrumb">
            <div rolw="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline='hover' color='inherit' href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline='hover'
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}

export const BasicBreadcrumbs = () => {
    return (
        <MyContainer title="Basic Breadcrumbs">
            <div rolw="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline='hover' color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline='hover'
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
                </Breadcrumbs>
            </div>
        </MyContainer>
    )
}