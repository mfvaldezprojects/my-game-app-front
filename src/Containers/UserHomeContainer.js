import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImgMediaCard from "../Components/NewCharacter";
import dbCall from "../Controller/dbCall";

async function myCharactersDB(username) {
  return await dbCall.getCustomCharactersByUser(0, username);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function UserHomeContainer({ userState }) {
  const navigate = useNavigate();
  const [charactersDB, setCharactersDB] = useState([]);
  const redirectCreateCharacter = async () => {
    navigate("/create-character");
  };

  useEffect(() => {
    if (userState) {
      const charectarsList = new Promise((resolve, reject) => {
        resolve(myCharactersDB(userState.username));
      });

      charectarsList
        .then((response) => {
          setCharactersDB(response);
        })
        .catch((error) => {
          console.log("Error en obtencion de datos");
        })
        .finally(() => {
          console.log("Finaliza el llamado");
        });
    } else {
      setCharactersDB([]);
    }
  }, [userState]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
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
              Personajes Creados
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              En esta página podrás ver todos los personajes que creaste y sus
              características.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={redirectCreateCharacter}>
                Crear nuevo personajes
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {charactersDB.map((character) => (
              <ImgMediaCard character={character} userState={userState}/>
            ))}
            {charactersDB.length === 0 ? (
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                No tiene personajes creados.
              </Typography>
            ) : null}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
