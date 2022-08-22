import React from "react";
import Box from "@mui/material/Box";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/dialogSlice";

const DialogBox = () => {
  const dispatch = useDispatch();
  const reduxControl = useSelector((state) => state.dialog);
  const reduxOpen = reduxControl.dialogOpen;
  const reduxClose = reduxControl.dialogClose;

  const handleClickOpen = () => {
    dispatch(update(reduxOpen));
  };

  const handleClose = () => {
    dispatch(update(reduxClose));
  };
  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box sx={{ width: "75%", m: 15 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Dialog Example
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={reduxOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Material UI Redux"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Does My Material UI and redux application look Good
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>YES</Button>
              <Button onClick={handleClose}>No</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </Container>
  );
};

export default DialogBox;
