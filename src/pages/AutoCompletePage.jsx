import * as React from 'react'
import { Container, Grid, Divider, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {
    ComboBox,
    Playground,
    CountrySelect,
    Grouped,
    RenderGroup,
    DisabledOptions,
} from '../inputs/AutocompleteComponent';
import MyBackButton from '../component/MyBackButton';

const AutoCompletePage = () => {
    const sections = [
        <ComboBox />,
        <Playground />,
        <CountrySelect />,
        <Grouped />,
        <RenderGroup />,
        <DisabledOptions />,
    ];

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
                        Auto Complete Page
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

export default AutoCompletePage