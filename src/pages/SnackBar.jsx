import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Container from "@mui/material/Container";
import TopBar from "../Components/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/dialogSlice";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbars = ()=> {
    const dispatch = useDispatch();
    const reduxControl = useSelector((state) => state.dialog);
    const reduxOpen = reduxControl.dialogOpen;
    const reduxClose = reduxControl.dialogClose;

  const handleClick = () => {
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
    <Stack spacing={2} sx={{ width: '100%' , m:25}}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={reduxOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          SnackBar Succesfully Completed
        </Alert>
      </Snackbar>
    </Stack>
    </Container>
  );
}

export default Snackbars