import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Container from "@mui/material/Container";
import TopBar from "../Components/TopBar";

const drawerBleeding = 50;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  margin: "50px",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(100% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }} maxWidth="xl">
      <TopBar />

      <Box
        sx={{
          width: "40%",
          m: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Swipe Drawer
        </Typography>
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" onClick={toggleDrawer(true)}>Open</Button>
        </div>
        <Root>
          <CssBaseline />
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(80% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                51 results
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: "100%",
                overflow: "auto",
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      </Box>
    </Container>
  );
}

export default SwipeableEdgeDrawer;
