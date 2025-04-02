import * as React from "react";
import { Container, Grid, Typography, Button, Divider, Collapse } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import {
    BasicCard,
    OutlinedCard,
    RecipeReviewCard,
    MediaCard,
    ImgMediaCard,
    MultiActionAreaCard,
    MediaControlCard,
    SelectActionCard,
} from "../surfaces/CardComponent";

const CardPage = () => {
    const navigate = useNavigate();
    const sections = [
        <BasicCard />,
        <OutlinedCard />,
        <RecipeReviewCard />,
        <MediaCard />,
        <ImgMediaCard />,
        <MultiActionAreaCard />,
        <MediaControlCard />,
        <SelectActionCard />,
    ];

    function handleBack() {
        navigate("/");
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
                        Card Page
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

export default CardPage;
