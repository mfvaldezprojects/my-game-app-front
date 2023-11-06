import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export default function ReviewForm({myCharacter}) {
    console.log("ReviewForm")
    console.log(myCharacter)
  return (
    <React.Fragment>           
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Personaje
          </Typography>
          <Typography gutterBottom>Nombre: {myCharacter.name}</Typography>
          <Typography gutterBottom>Tipo: {myCharacter.type}</Typography>
          <Typography gutterBottom>Edad: {myCharacter.age}</Typography>
          <Typography gutterBottom>Genero: {myCharacter.gender}</Typography>
          <CardMedia
                component="img"
                alt= {myCharacter.name}
                height="140"
                image = {myCharacter.image}
            />
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Equipamento Superior
            </Typography>
            <Grid container>            
                    <React.Fragment key={myCharacter.item1.item}>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item1.item}</Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item1.color}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item1.accesories}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item1.traits}</Typography>
                    </Grid>
                    <CardMedia
                        component="img"
                        alt= {myCharacter.item1.item}
                        height="140"
                        image = {myCharacter.item1.image}
                    />
                    </React.Fragment>            
            </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Equipamento Inferior
            </Typography>
            <Grid container>            
                    <React.Fragment key={myCharacter.item2.item}>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item2.item}</Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item2.color}</Typography>
                    </Grid>                
                    <CardMedia
                        component="img"
                        alt= {myCharacter.item2.item}
                        height="140"
                        image = {myCharacter.item2.image}
                    />
                    </React.Fragment>            
            </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Equipamento Calzado
            </Typography>
            <Grid container>            
                    <React.Fragment key={myCharacter.item3.item}>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item3.item}</Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Typography gutterBottom>{myCharacter.item3.color}</Typography>
                    </Grid>                       
                    <CardMedia
                        component="img"
                        alt= {myCharacter.item3.item}
                        height="140"
                        image = {myCharacter.item3.image}
                    />         
                    </React.Fragment>            
            </Grid>
          </Grid>
        </Grid>      
    </React.Fragment>
  );
}