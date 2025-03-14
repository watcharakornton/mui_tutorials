import * as React from 'react'
import { Container, Stack, Divider, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ComboBox, Playground, CountrySelect, Grouped, RenderGroup, DisabledOptions } from "../inputs/AutocompleteComponent"

const AutoCompletePage = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <ComboBox />
                <Divider sx={{ width: "100%" }} />
                <Playground />
                <Divider sx={{ width: "100%" }} />
                <CountrySelect />
                <Divider sx={{ width: "100%" }} />
                <Grouped />
                <Divider sx={{ width: "100%" }} />
                <RenderGroup />
                <Divider sx={{ width: "100%" }} />
                <DisabledOptions />
                <Divider sx={{ width: "100%" }} />
                <Button size="large" startIcon={<ChevronLeftIcon />} href="/">Back</Button>
            </Stack>
        </Container>
    )
}

export default AutoCompletePage