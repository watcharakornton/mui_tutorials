import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

function DrawerAppBar({ title, path }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(`/${path}/`);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        href="/"
                    >
                        {title}
                    </Typography>
                    <Button onClick={handleBack} startIcon={<ChevronLeftIcon />}>Back</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;