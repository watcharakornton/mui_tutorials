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

const CardComponent = ({ title, href, isTemplate }) => {
    console.log(isTemplate)
    return (
        <Card sx={{ minWidth: 275, bgcolor: isTemplate ? "#9E9E9E" : "white" }}>
            <CardContent>
                <Typography color={isTemplate ? "red" : "black"} variant="h6" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={href} disabled={isTemplate}>
                    View
                </Button>
            </CardActions>
        </Card>
    )
}

const Home = () => {
    const cardsColOne = [
        { title: 'Autocomplete Page', href: "/autocomplete" },
        { title: 'Button Page', href: "/button" },
        { title: 'Button Group Page', href: "/button-group" },
        { title: 'Checkbox Page', href: "/checkbox" },
        { title: 'Template Page', href: "/", isTemplate: true },
    ]
    const cardsColTwo = [
        { title: 'Template Page', href: "/", isTemplate: true },
        { title: 'Template Page', href: "/", isTemplate: true },
        { title: 'Template Page', href: "/", isTemplate: true },
        { title: 'Template Page', href: "/", isTemplate: true },
        { title: 'Template Page', href: "/", isTemplate: true },
    ]
    return (
        <Container maxWidth="md">
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
            >
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >
                    {cardsColOne.map((card, index) => (
                        <CardComponent key={index} title={card.title} href={card.href} isTemplate={card.isTemplate} />
                    ))}
                </Stack>
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >
                    {cardsColTwo.map((card, index) => (
                        <CardComponent key={index} title={card.title} href={card.href} isTemplate={card.isTemplate} />
                    ))}
                </Stack>
                {/* <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >
                    {cardsColTwo.map((card, index) => (
                        <CardComponent key={index} title={card.title} href={card.href} isTemplate={card.isTemplate} />
                    ))}
                </Stack> */}
            </Stack>

        </Container>
    )
}

export default Home