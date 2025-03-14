import * as React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
    Checkboxes,
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
                <Checkboxes />
                <Divider sx={{ width: "100%" }} />
                <Button size='large' startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default AutoCompletePage