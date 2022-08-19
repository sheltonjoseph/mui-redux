import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import validator from "validator";
import { useSelector , useDispatch} from "react-redux";
import {  update } from "../Redux/credSlice";

const Buttons = () => {
  const ReduxUser = useSelector((state) => state.button);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [saveMsg, setSaveMsg] = useState(null);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(update({userName, password , errorMessage}));
    setSaveMsg("Credentials Saved Succesfully")
  };

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage(null);
    }
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

        <div style={{ margin: "30px" }}>
          <TextField
            id="outlined-error"
            label="Username"
            defaultValue={ReduxUser.userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {errorMessage == null ? (
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              defaultValue={ReduxUser.password}
              onChange={(e) => setPassword(validate(e.target.value))}
            />
          ) : (
            <TextField
              error
              id="outlined-error-helper-text"
              label="Password"
              helperText={ReduxUser.errorMessage}
              onChange={(e) => setPassword(validate(e.target.value))}
            />
          )}
        </div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {(errorMessage !== null) || (userName === '') ? (
            <Button variant="contained" disabled>
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleUpdate}
            >
              Save
            </Button>
          )}
        </div>
        {saveMsg !== null && (
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "green", textAlign: "center", m: 10 }}
          >
            {saveMsg}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Buttons;
