import * as React from 'react';
import {
    Container,
    Stack,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CardComponent = ({ title, href, isTemplate }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 275,
                bgcolor: isTemplate ? "#6E6E6E" : "background.default",
                color: isTemplate ? "white" : "text.primary",
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button  sx={{ ml: 1 }} size="small" href={href} endIcon={<ChevronRightIcon />} disabled={isTemplate}>
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
        { title: 'Templates', href: "/", isTemplate: true },
    ]
    const cardsColTwo = [
        { title: 'Templates', href: "/", isTemplate: true },
        { title: 'Templates', href: "/", isTemplate: true },
        { title: 'Templates', href: "/", isTemplate: true },
        { title: 'Templates', href: "/", isTemplate: true },
        { title: 'Templates', href: "/", isTemplate: true },
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