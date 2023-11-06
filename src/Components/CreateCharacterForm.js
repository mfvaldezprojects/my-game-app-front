import React, { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CharactersForm from './CharactersForm';
import EquipmentForm from './EquipmentForm';
import ReviewForm from './ReviewForm';
import dbCall from '../Controller/dbCall';
import CardMedia from "@mui/material/CardMedia";

const steps = [
  "Elija un personaje",
  "Defina su equipamente",
  "Preview del personaje",
];

async function saveCharacters(customCharacter) {  
  const charactersDB = await dbCall.addCustomCharacter(customCharacter);
  console.log(charactersDB); //{"msg": "Personaje creado con exito!"}
}

export default function CreateCharacterForm({ userState }) {
  const characterRaw = {
    name: null,
    type: null,
    gender: null,
    age: null,
    image: null,
    item1: {
      item: null,
      category: null,
      color: null,
      accesories: null,
      traits: null,
      image: null,
    },
    item2: { item: null, category: null, color: null, image: null },
    item3: { item: null, category: null, color: null, image: null },
    username: userState.username,
  };

  const [myCharacter, setMyCharacter] = useState(characterRaw);
  const [activeStep, setActiveStep] = useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CharactersForm
            myCharacter={myCharacter}
            setMyCharacter={setMyCharacter}
          />
        );
      case 1:
        return (
          <EquipmentForm
            myCharacter={myCharacter}
            setMyCharacter={setMyCharacter}
          />
        );
      case 2:
        return <ReviewForm myCharacter={myCharacter} setMyCharacter={setMyCharacter}/>;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      saveCharacters(myCharacter);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 1, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Personaje creado con exito!
              </Typography>
              <CardMedia
                component="img"
                alt="Welcome image"
                image="./Images/LevelUp.JPG"
              />
              <Typography variant="subtitle1">
                Podes encontrar tu nuevo personaje en la página "Mis personajes"
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Atras
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Guardar" : "Siguente"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
