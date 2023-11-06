import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OriginalCharacterCard from "../Components/OriginalCharacterCard";
import dbCall from "../Controller/dbCall";

const charactersDB = await dbCall.getCharacters(0);

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AllCharactersContainer({ userState }) {
  const navigate = useNavigate();
  const redirectCreateCharacter = async () => {
    if (userState) {
      navigate("/create-character");
    } else {
      navigate("/login");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 6,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nuestros Personajes Originales
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Estos son los OG characters creados por nuestro equipo.
            </Typography>
            <Typography
              variant="P"
              align="center"
              color="text.secondary"
              paragraph
            >
              Nuestros personajes originarios sirven de skin base para que
              puedas crear tus nuevos personajes.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                bgcolor="secondary.main"
                onClick={redirectCreateCharacter}
              >
                Comenzar a Crear Ahora
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {charactersDB.map((character) => (
              <OriginalCharacterCard character={character} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
