import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import CardMedia from '@mui/material/CardMedia';
import dbCall from '../Controller/dbCall';

const charactersDB = await dbCall.getCharacters(0);

export default function CharactersForm({myCharacter, setMyCharacter}) {
    const [character, setCharacter] = useState();    
    let characterTmp

    const CharacterList = {
        options: charactersDB,
        getOptionLabel: (option) => `${option.name}`,
    }

    const autocompleteHandle = (event,newValue) => {        
        characterTmp =  myCharacter
        characterTmp.image = newValue.image
        characterTmp.type = newValue.type         
        setMyCharacter(characterTmp)
        setCharacter(newValue);            
      };    

    const nameHandle = (newValue) => {        
        characterTmp =  myCharacter
        characterTmp.name = newValue        
        setMyCharacter(characterTmp)                  
      };    
    
      const ageHandle = (newValue) => {        
        characterTmp =  myCharacter
        characterTmp.age = newValue        
        setMyCharacter(characterTmp)                  
      };    
    
    const genderHandle = (newValue) => {        
        characterTmp =  myCharacter
        characterTmp.gender = newValue        
        setMyCharacter(characterTmp)                
      };    
    useEffect(()=>{ },[character])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Generales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(event) => { nameHandle(event.target.value) }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Edad"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => { ageHandle(event.target.value) }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Genero"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(event) => { genderHandle(event.target.value) }}
          />
        </Grid>      
        <Grid item xs={12} >
                <Autocomplete
                    {...CharacterList}
                    id="characterList"
                    value={character}
                    onChange={(event, newValue) => {autocompleteHandle(event,newValue);}}
                    renderInput={(params) => (<TextField {...params} label="Personajes:" variant="standard" />)}
                    />
        </Grid>
        {!character ?
            null
        :
            <Grid item xs={12} >
                <CardMedia
                        component="img"
                        alt= {character.name}
                        height="100%"
                        width="35"
                        image = {character.image}
                    />
            </Grid>
        }
      </Grid>      
    </React.Fragment>
  );
}