import * as React from 'react';
import { Box, Divider, Stack, Container } from '@mui/material';

// import { ComboBox, Playground, CountrySelect, Grouped, RenderGroup, DisabledOptions } from "./inputs/AutocompleteComponent"


function App() {
  return (
    <Container maxWidth="sm">
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        {/* <ComboBox />
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
        <Divider sx={{ width: "100%" }} /> */}
      </Stack>
    </Container>
  )
}

export default App
