import * as React from "react";
import ImgMediaCard from "../Components/NewCharacter";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import dbCall from "../Controller/dbCall";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const charactersDB = await dbCall.getCustomCharacters(5);

function Landing({ userState }) {
  return (
    <div>
      <Container maxWidth="m">
        <CardMedia
          component="img"
          alt="Welcome image"
          image="./Images/Welcome2.JPG"
        />
      </Container>
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Bienvenido a My Game App!
        </Typography>
        <Typography variant="h5" color="inherit" gutterBottom>
          Registrate o inicia sesion para crear nuevos personajes.
        </Typography>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {charactersDB.map((character) => (
            <ImgMediaCard character={character} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Landing;