import * as React from 'react';
import MyContainer from '../component/MyContainer';
import {
    Pagination,
    PaginationItem,
    Stack,
} from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

export const CustomIcons = () => {
    return (
        <MyContainer title="Custom Icons">
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </MyContainer>
    );
}

export const PaginationButtons = () => {
    return (
        <MyContainer title="Pagination Buttons">
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton />
                <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
        </MyContainer>
    )
}

export const PaginationSize = () => {
    return (
        <MyContainer title="Pagination Size">
            <Stack spacing={2}>
                <Pagination count={10} size="small" />
                <Pagination count={10} />
                <Pagination count={10} size="large" />
            </Stack>
        </MyContainer>
    )
}

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