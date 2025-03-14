import React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
    BasicButtonGroup,
    VariantButtonGroup,
    GroupSizesColors,
    GroupOrientation,
    SplitButton,
} from '../inputs/ButtonGroupComponent';

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Divider sx={{ width: "100%" }} />
                <BasicButtonGroup />
                <Divider sx={{ width: "100%" }} />
                <VariantButtonGroup />
                <Divider sx={{ width: "100%" }} />
                <GroupSizesColors />
                <Divider sx={{ width: "100%" }} />
                <GroupOrientation />
                <Divider sx={{ width: "100%" }} />
                <SplitButton />
                <Divider sx={{ width: "100%" }} />
                <Button size="large" startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default Home