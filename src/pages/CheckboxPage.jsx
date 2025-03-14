import * as React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
    Checkboxes,
    CheckboxLabels
} from "../inputs/CheckboxComponent";

const CheckboxPage = () => {
    const sections = [<Checkboxes />, <CheckboxLabels />];

    return (
        <Container maxWidth="sm">
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Divider sx={{ width: "100%" }} />
                {sections.map((Component, index) => (
                    <React.Fragment key={index}>
                        {Component}
                        <Divider sx={{ width: "100%" }} />
                    </React.Fragment>
                ))}
                <Button size='large' startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default CheckboxPage