import React, { useEffect, useState }from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TopBar from './TopBar';
import { useSelector , useDispatch} from "react-redux";
import {  update } from "../Redux/autoSlice";


const AutoComplete = () => {
    const inputValue = useSelector((state) => state.auto.inputValue);
    // const[inputValue , setInputValue] = useState()
    const [selectedData, setSelectedData] = useState();
    console.log(inputValue)
    const dispatch = useDispatch();
    
    const handleClick = (value) =>{
      dispatch(update({value}));
    }

  return (
    <Container style={{display:'flex',justifyContent:'center'}} maxWidth="xl">
      <TopBar/>
        {/* <Typography sx={{ p: 15 , textAlign:'center'}}>The Movies</Typography> */}
       <Box component="main" sx={{ m: 20 }}>
       <Autocomplete
        disablePortal
        inputValue={inputValue}
        onChange={(event, newInputValue) => {
          event.preventDefault();
          handleClick(newInputValue);
          setSelectedData(top100Films.filter((a) => a.label === newInputValue)[0])
        }}
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 345  }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    {selectedData &&
        (<Card sx={{ maxWidth: "100%" , my: 10 , height:"100%"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={selectedData.img}
            sx={{objectFit:'fill'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {selectedData.label} - {selectedData.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )}

      </Box>
  </Container>
  )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 , img: 'https://media.vanityfair.com/photos/541c84101019a3955fea0c49/master/pass/s-vfh-shawshank-redemption-20th-anniversary.jpg'},
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
]

export default AutoComplete