import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import MyBackButton from "../component/MyBackButton";

import {
    HorizontalLinearStepper,
    HorizontalNonLinearStepper,
    HorizontalLinearAlternativeLabelStepper,
    HorizontalStepperWithError,
    CustomizedSteppers,
    VerticalLinearStepper,
} from "../navigation/StepperComponent";

const StepperPage = () => {
    const sections = [
        <HorizontalLinearStepper />,
        <HorizontalNonLinearStepper />,
        <HorizontalLinearAlternativeLabelStepper />,
        <HorizontalStepperWithError />,
        <CustomizedSteppers />,
        <VerticalLinearStepper />,
    ];

    return (
        <Container maxWidth="md">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" sx={{ mt: 5 }}>
                        Stepper Page
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
                    <MyBackButton />
                </Grid>
            </Grid>
        </Container>
    );
};

export default StepperPage;
