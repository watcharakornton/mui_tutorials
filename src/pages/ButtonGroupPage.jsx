import * as React from "react";
import { Container, Grid, Typography, Button, Divider } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import MyBackButton from "../component/MyBackButton";
import {
    BasicButtonGroup,
    VariantButtonGroup,
    GroupSizesColors,
    GroupOrientation,
    SplitButton,
} from '../inputs/ButtonGroupComponent';

const Home = () => {
    const sections = [
        <BasicButtonGroup />,
        <VariantButtonGroup />,
        <GroupSizesColors />,
        <GroupOrientation />,
        <SplitButton />,
    ]
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
                        Button Group Page
                    </Typography>
                </Grid>
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} sx={{ mt: 5 }}>
                            {Component}
                            <Divider sx={{ mt: 3, width: "100%" }} />
                        </Grid>
                    </React.Fragment>
                ))}
                <Grid item xs={12} sx={{ my: 5 }}>
                    <MyBackButton />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home