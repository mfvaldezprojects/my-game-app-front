import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReviewForm from './ReviewForm';
import CancelIcon from '@mui/icons-material/Cancel';
import { pink } from '@mui/material/colors';
import dbCall from '../Controller/dbCall';

async function deleteMyCharactersDB(name) {
    return await dbCall.deleteCustomCharacters(name);
  }
  export default function ImgMediaCard({character, userState}) {
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false)
    
    const moreDetail =  () => {    
      setShowModal(true)             
    }
  
    const deleteCharacter =  () => {    
      deleteMyCharactersDB(character.name)      
      navigate("/user-home");       
    }
  
    const closeDetail = () => {           
      setShowModal(false)             
  }

  return (
    <>
    {showModal ?
        <Grid Grid item key = {character.id} >
            <Card>
                <CardContent>
                    <CancelIcon sx={{ color: pink[500], fontSize: 40 }} onClick={() => closeDetail()}/>                
                    <Typography gutterBottom variant="h5" component="div">
                    Usuario creador: {character.username}
                    </Typography>
                    <ReviewForm myCharacter={character} />
                </CardContent>
            </Card>
        </Grid>
    :        
   <Grid Grid item key = {character.id} xs = {12} sm = {6} md = {4} >
        <Card sx = {
            {
                maxWidth: 345,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            <CardMedia
                component="img"
                alt= {character.name}
                height="140"
                image = {character.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Tipo: {character.type} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Edad: {character.age} 
                </Typography>
            </CardContent>
            <CardActions>
                    <Button size="small" onClick={moreDetail}>Ver mas</Button>
                    {userState && userState.username === character.username ?
                        <Button size="small" onClick={deleteCharacter}>Borrar</Button>
                    :
                        null
                    }                    
                </CardActions>
            </Card>
            </Grid>
        }
    </>
  );
}
