import * as React from 'react';
import {
    Container,
    Stack,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@mui/material'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        .
    </Box>
)

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                direction="row"
                spacing={3}
            >
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Autocomplete Page
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/autocomplete">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Button
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/button">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Button Group
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/button-group">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Checkbox
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/checkbox">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                </Stack>
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color='red' variant="h6" component="div">
                                Templates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/">View</Button>
                        </CardActions>
                    </Card>
                </Stack>
            </Stack>

        </Container>
    )
}

export default Home