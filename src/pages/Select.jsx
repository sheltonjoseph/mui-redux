import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/selectSlice";

const SelectAutoWidth = () => {
  const reduxAge = useSelector((state) => state.select.age);
  console.log(reduxAge);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(update({ value }));
  };

  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          m: 15,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          TextField And Buttons
        </Typography>
        <FormControl
          sx={{ m: 5, minWidth: 80, display: "flex", justifyContent: "center" }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={reduxAge}
            onChange={(event, newInputValue) => {
              event.preventDefault();
              handleClick(newInputValue);
            }}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty two</MenuItem>
          </Select>
        </FormControl>
        {reduxAge && (
          <Typography variant="h3" sx={{ textAlign: "center", m: 10 }}>
            your Selected AGE is {reduxAge}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default SelectAutoWidth;
