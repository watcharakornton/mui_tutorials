import * as React from 'react';
import { 
    Button, 
    ButtonGroup
} from '@mui/material'

export const BasicButtonGroup = () => {
    return (
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    );
}
