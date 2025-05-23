import * as React from "react";
import {
    Container,
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MyBackButton from "../component/MyBackButton";

const CardComponent = ({ title, href, isTemplate }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 275,
                bgcolor: isTemplate ? "#6E6E6E" : "background.default",
                color: isTemplate ? "white" : "text.primary",
                borderRadius: '12px 12px 1px 1px'
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{ ml: 1 }}
                    size="small"
                    href={href}
                    endIcon={<ChevronRightIcon />}
                    disabled={isTemplate}
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
};

const DateTimePage = () => {
    const cards = [
        { title: "Date Picker page", href: "/date-time/date-picker" },
        { title: "Date Field page", href: "/date-time/date-field" },
        { title: "Date Calendar page", href: "/date-time/date-calendar" },
        { title: "Time Picker page", href: "/date-time/time-picker" },
        { title: "Time Field page", href: "/date-time/time-field" },
        { title: "Time Clock page", href: "/date-time/time-clock" },
        { title: "Digital Clock page", href: "/date-time/digital-clock" },
        { title: "Date Time Picker page", href: "/date-time/date-time-picker" },
        { title: "Date Time Field page", href: "/date-time/date-time-field" },
        { title: "Date Range Picker page", href: "/date-time/date-range-picker" },
    ];
    return (
        <Container maxWidth="lg" sx={{ my: 4, minHeight: "100vh" }}>
            <Typography variant="h4" sx={{ mb: 3, width: 300, mx: "auto" }}>
                Date Time page
            </Typography>
            <Grid container spacing={2} rowSpacing={2} justifyContent="space-between">
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardComponent
                            title={card.title}
                            href={card.href}
                            isTemplate={card.isTemplate}
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} sx={{ my: 5 }}>
                <MyBackButton />
            </Grid>
        </Container>
    );
};

export default DateTimePage;
