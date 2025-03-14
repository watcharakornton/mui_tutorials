import * as React from 'react';
import { Box, Divider, Stack, Container } from '@mui/material';

// import { ComboBox, Playground, CountrySelect, Grouped, RenderGroup, DisabledOptions } from "./inputs/AutocompleteComponent"
import {
  BasicButtons,
  TextButtons,
  ColorButtons,
  ButtonSizes,
  IconLabelButtons,
  IconButtons,
  IconButtonSizes,
  IconButtonColors,
  LoadingIconButton,
  IconButtonWithBadge,
  InputFileUpload,
  LoadingButtonsTransition,
  CustomizedButtons,
} from './inputs/ButtonComponent';

import {
  BasicButtonGroup,
  VariantButtonGroup,
  GroupSizesColors,
  GroupOrientation,
  SplitButton,
} from './inputs/ButtonGroupComponent';


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

        {/* <Divider sx={{ width: "100%" }} />
        <BasicButtons />
        <Divider sx={{ width: "100%" }} />
        <TextButtons />
        <Divider sx={{ width: "100%" }} />
        <ColorButtons />
        <Divider sx={{ width: "100%" }} />
        <ButtonSizes />
        <Divider sx={{ width: "100%" }} />
        <IconLabelButtons />
        <Divider sx={{ width: "100%" }} />
        <IconButtons />
        <Divider sx={{ width: "100%" }} />
        <IconButtonSizes />
        <Divider sx={{ width: "100%" }} />
        <IconButtonColors />
        <Divider sx={{ width: "100%" }} />
        <LoadingIconButton />
        <Divider sx={{ width: "100%" }} />
        <IconButtonWithBadge />
        <Divider sx={{ width: "100%" }} />
        <InputFileUpload />
        <Divider sx={{ width: "100%" }} />
        <LoadingButtonsTransition />
        <Divider sx={{ width: "100%" }} />
        <CustomizedButtons />
        <Divider sx={{ width: "100%" }} /> */}

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

      </Stack>
    </Container>
  )
}

export default App
