import * as React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
    Checkboxes,
    CheckboxLabels
} from "../inputs/CheckboxComponent";

const AutoCompletePage = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Divider sx={{ width: "100%" }} />
                <Checkboxes />
                <Divider sx={{ width: "100%" }} />
                <CheckboxLabels />
                <Divider sx={{ width: "100%" }} />
                <Button size='large' startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default AutoCompletePage