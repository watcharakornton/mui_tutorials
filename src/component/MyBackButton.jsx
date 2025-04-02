import * as React from 'react'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

const MyBackButton = () => {
    const navigate = useNavigate();

    function handleBack() {
        navigate('/');
    };

    return (
        <Button size="large" startIcon={<ChevronLeftIcon />} onClick={handleBack}>
            Back
        </Button>
    )
}

export default MyBackButton;