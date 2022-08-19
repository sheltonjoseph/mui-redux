import React ,{useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



const ContinuousSlider = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
    style={{ display: "flex", justifyContent: "center" }}
    maxWidth="xl"
  >
    <TopBar />
    <Box sx={{ width: "75%" ,  m: 15}}>
    <Typography variant="h3" sx={{ textAlign: "center" }}>
        Control your Volume
        </Typography>
      <Stack spacing={2} direction="row" sx={{ mb: 1 , m:15}} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
    </Container>
  );
}

export default ContinuousSlider;
