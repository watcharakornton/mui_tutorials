import * as React from 'react'
import MyContainer from '../component/MyContainer'
import { 
    Skeleton,
    Stack,
} from '@mui/material';

export const Variants = () => {
    return (
        <MyContainer title="Variants">
            <Stack spacing={1}>
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='rentangular' width={210} height={60} />
                <Skeleton variant='rounded' width={210} height={60} />
            </Stack>
        </MyContainer>
    )
}
