import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/slideSlice";

const ContinuousSlider = () => {
 
  const reduxVolume = useSelector((state) => state.slider.volume);
  console.log(reduxVolume);
  const dispatch = useDispatch();
  const handleChange = (reduxVolume) => {
    dispatch(update( {reduxVolume }));
  };

  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box sx={{ width: "75%", m: 15 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Control your Volume
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, m: 15 }}
          alignItems="center"
        >
          <VolumeDown />
          <Slider
            aria-label="Volume"
            value={reduxVolume}
            onChange={(event, newInputValue) => {
              event.preventDefault();
              handleChange(newInputValue);
            }}
          />
          <VolumeUp />
        </Stack>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Your Volume is {reduxVolume}
        </Typography>
      </Box>
    </Container>
  );
};

export default ContinuousSlider;
