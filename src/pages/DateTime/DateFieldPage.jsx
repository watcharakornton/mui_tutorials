import * as React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";

import {
    BasicDateField,
    DateFieldValue,
    CustomDateFormat,
} from "../../datetime/DateFieldComponent";

const DateFieldPage = () => {
    const sections = [
        <BasicDateField />,
        <DateFieldValue />,
        <CustomDateFormat />,
    ];

    const navigate = useNavigate();

    function handleBack() {
        navigate('/date-time');
    }

    return (
        <Container maxWidth="sm">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" sx={{ mt: 5 }}>
                        Date Field page
                    </Typography>
                </Grid>
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sx={{ mt: 5 }}>
                            {Component}
                        </Grid>
                    </React.Fragment>
                ))}
                <Grid item xs={12} sx={{ my: 5 }}>
                    <Button size="large" startIcon={<ChevronLeftIcon />} onClick={handleBack}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DateFieldPage;
