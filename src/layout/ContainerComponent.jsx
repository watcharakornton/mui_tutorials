import * as React from 'react'
import MyContainer from '../component/MyContainer'
import {
    CssBaseline,
    Box,
    Container,
} from '@mui/material';

export const SimpleContainer = () => {
  return (
    <MyContainer title="Simple Container">
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
            </Container>
        </React.Fragment>
    </MyContainer>
  )
}
