import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import CardMedia from '@mui/material/CardMedia';
import dbCall from '../Controller/dbCall';

const upperEquipmentDB = await dbCall.getEquipmentsByCatgory(0,"superior");
const lowerEquipmentDB = await dbCall.getEquipmentsByCatgory(0,"inferior");
const ShoesEquipmentDB = await dbCall.getEquipmentsByCatgory(0,"shoes");

export default function EquipmentForm({myCharacter, setMyCharacter}) {
    const [upperEquipment, setUpperEquipment] = useState();    
    const [lowerEquipment, setLowerEquipment] = useState();    
    const [shoesEquipment, setShoesEquipment] = useState();    
    let characterTmp

    const UpperEquipmentList = {
        options: upperEquipmentDB,
        getOptionLabel: (option) => `${option.item}`,
    }

    const LowerEquipmentList = {
        options: lowerEquipmentDB,
        getOptionLabel: (option) => `${option.item}`,
    }

    const ShoesEquipmentList = {
        options: ShoesEquipmentDB,
        getOptionLabel: (option) => `${option.item}`,
    }

    const autocompleteUpperHandle = (event,newValue) => {        
        characterTmp =  myCharacter
        characterTmp.item1.item = newValue.item
        characterTmp.item1.category = newValue.category
        characterTmp.item1.color = newValue.color
        characterTmp.item1.accesories = newValue.accesories
        characterTmp.item1.traits = newValue.traits        
        characterTmp.item1.image = newValue.image                                                  
        setMyCharacter(characterTmp)
        setUpperEquipment(newValue);            
      };    

      const autocompleteLowerHandle = (event,newValue) => {        
        characterTmp =  myCharacter
        characterTmp.item2.item = newValue.item
        characterTmp.item2.category = newValue.category
        characterTmp.item2.color = newValue.color
        characterTmp.item2.image = newValue.image                                                  
        setMyCharacter(characterTmp)
        setLowerEquipment(newValue);            
      };    

      const autocompleteShoesHandle = (event,newValue) => {        
        characterTmp =  myCharacter
        characterTmp.item3.item = newValue.item
        characterTmp.item3.category = newValue.category
        characterTmp.item3.color = newValue.color
        characterTmp.item3.image = newValue.image
        setMyCharacter(characterTmp)
        setShoesEquipment(newValue);            
      };    
  
    return (
    <React.Fragment>
        <Container sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                Equipo Superior
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                            <Autocomplete
                                {...UpperEquipmentList}
                                id="upperEquipmentList"
                                value={upperEquipment}
                                onChange={(event, newValue) => {autocompleteUpperHandle(event,newValue);}}
                                renderInput={(params) => (<TextField {...params} label="Equipo Superior:" variant="standard" />)}
                                />
                    </Grid>
                    {!upperEquipment ?
                        null
                    :
                        <Grid item xs={12} >
                            <CardMedia
                                component="img"
                                alt= {upperEquipment.item}
                                height="100%"
                                width="35"
                                image = {upperEquipment.image}
                            />
                        </Grid>
                    }
                </Grid>
        </Container>
        <Container sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                Equipo Inferior
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                            <Autocomplete
                                {...LowerEquipmentList}
                                id="lowerEquipmentList"
                                value={upperEquipment}
                                onChange={(event, newValue) => {autocompleteLowerHandle(event,newValue);}}
                                renderInput={(params) => (<TextField {...params} label="Equipo Inferior:" variant="standard" />)}
                                />
                    </Grid>
                    {!lowerEquipment ?
                        null
                    :
                        <Grid item xs={12} >
                            <CardMedia
                                component="img"
                                alt= {lowerEquipment.item}
                                height="100%"
                                width="35"
                                image = {lowerEquipment.image}
                            />
                        </Grid>
                    }
                </Grid>
        </Container>
        <Container sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                Calzado
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                            <Autocomplete
                                {...ShoesEquipmentList}
                                id="shoesEquipmentList"
                                value={shoesEquipment}
                                onChange={(event, newValue) => {autocompleteShoesHandle(event,newValue);}}
                                renderInput={(params) => (<TextField {...params} label="Calzado:" variant="standard" />)}
                                />
                    </Grid>
                    {!shoesEquipment ?
                        null
                    :
                        <Grid item xs={12} >
                            <CardMedia
                                component="img"
                                alt= {shoesEquipment.item}
                                height="100%"
                                width="35"
                                image = {shoesEquipment.image}
                            />
                        </Grid>
                    }
                </Grid>
        </Container>
    </React.Fragment>
  );
}