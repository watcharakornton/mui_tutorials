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

const Home = () => {
  const cards = [
    { title: "Autocomplete Page", href: "/autocomplete" },
    { title: "Button Page", href: "/button" },
    { title: "Button Group Page", href: "/button-group" },
    { title: "Checkbox Page", href: "/checkbox" },
    { title: "FAB Page", href: "/floating-action-button" },
    { title: "Radio Group page", href: "/radio-group" },
    { title: "Rating Page", href: "/rating" },
    { title: "Select Page", href: "/select" },
    { title: "Slider Page", href: "/slider" },
    { title: "Switch Page", href: "/switch" },
    { title: "Text Field Page", href: "/text-field" },
    { title: "Transfer List Page", href: "/transfer-list" },
    { title: "Toggle Button Page", href: "/toggle-button" },
    { title: "Image Avatars Page", href: "/image-avatars" },
    { title: "Badge Page", href: "/badge" },
    { title: "Chip Page", href: "/chip" },
    { title: "Divider page", href: "/divider" },
    { title: "Templates", href: "/", isTemplate: true },
    { title: "Templates", href: "/", isTemplate: true },
    { title: "Templates", href: "/", isTemplate: true },
    { title: "Templates", href: "/", isTemplate: true },
  ];
  return (
    <Container maxWidth="md" sx={{ my: 4, minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 3, width: 100, mx: "auto" }}>
        Inputs
      </Typography>
      <Grid container spacing={2} rowSpacing={2} justifyContent="space-between">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent
              title={card.title}
              href={card.href}
              isTemplate={card.isTemplate}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
