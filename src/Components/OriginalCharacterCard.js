import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function OriginalCharacterCard({character}) {
    
    return (
        <Grid Grid item key = {character.id} xs = {12} sm = {6} md = {4} >
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="div"
                sx={{
                    pt: '56.25%',
                }}
                image = {character.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {character.name}
                </Typography>
                <Typography>
                    Tipo: {character.type} 
                </Typography>
                <Typography>
                    Edad: {character.age} 
                </Typography>
                <Typography>
                    Genero: {character.gender} 
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}