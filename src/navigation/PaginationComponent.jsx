import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Pagination,
    Stack,
} from '@mui/material';

export const PaginationRounded = () => {
    return (
        <MyContainer title="Pagination Rounded">
            <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </MyContainer>
    )
}

export const BasicPagination = () => {
    return (
        <MyContainer title="Basic Pagination">
            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Stack>
        </MyContainer>
    )
}

export const PaginationOutlined = () => {
    return (
        <MyContainer title="Pagination Outlined">
            <Stack spacing={2}>
                <Pagination count={10} variant='outlined' />
                <Pagination count={10} variant='outlined' color="primary" />
                <Pagination count={10} variant='outlined' color="secondary" />
                <Pagination count={10} variant='outlined' disabled />
            </Stack>
        </MyContainer>
    )
}