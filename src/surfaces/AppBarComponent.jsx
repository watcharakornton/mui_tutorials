import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    AppBar,
    Box, 
    Toolbar,
    Typography,
    IconButton,
    Button,
    Switch,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu,
} from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle,
} from '@mui/icons-material'

export const MenuAppBar = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MyContainer title="Menu App Bar">
            <Box sx={{ width: '95%' }}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                            Photos
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton 
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </MyContainer>
    )
}

export const ButtonAppBar = () => {
    return (
        <MyContainer title="Button AppBar">
            <Box sx={{ width: '95%' }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </MyContainer>
    )
}
