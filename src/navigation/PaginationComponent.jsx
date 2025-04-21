import * as React from 'react';
import MyContainer from '../component/MyContainer';
import { styled } from '@mui/material/styles';
import {
    Pagination,
    PaginationItem,
    Stack,
    Typography,
    usePagination,
    TablePagination,
} from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import {
    Link,
    MemoryRouter,
    Route,
    Routes,
    useLocation,
} from 'react-router';

function Content() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Pagination
            page={page}
            count={10}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    );
}

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

export const TablePaginationDemo = () => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(10);
    };

    return (
        <MyContainer title="Table Pagination Demo">
            <TablePagination 
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </MyContainer>
    );
}

export const UsePagination = () => {
    const { items } = usePagination({
        count: 10,
    });

    return (
        <MyContainer title="Use Pagination">
            <nav>
                <List>
                    {items.map(({ page, type, selected, ...item }, index) => {
                        let children = null;

                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                            children = '...';
                        } else if (type === 'page') {
                            children = (
                                <button
                                    type="button"
                                    style={{
                                        fontWeight: selected ? 'bold' : undefined,
                                    }}
                                    {...item}
                                >
                                    {page}
                                </button>
                            )
                        } else {
                            children = (
                                <button type="button" {...item}>
                                    {type}
                                </button>
                            );
                        }

                        return <li key={index}>{children}</li>
                    })}
                </List>
            </nav>
        </MyContainer>
    );
}

export const PaginationLink = () => {
    return (
        <MyContainer title="Pagination Link">
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </MyContainer>
    )
}

export const PaginationControlled = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <MyContainer title="Pagination Controlled">
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={10} page={page} onChange={handleChange} />
            </Stack>
        </MyContainer>
    )
}

export const PaginationRanges = () => {
    return (
        <MyContainer title="Pagination Ranges">
            <Stack spacing={2}>
                <Pagination count={11} defaultPage={6} siblingCount={0} />
                <Pagination count={11} defaultPage={6} />
                <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
                <Pagination count={11} defaultPage={6} boundaryCount={2} />
            </Stack>
        </MyContainer>
    )
}

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