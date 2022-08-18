import React from "react";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <TopBar />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'primary.dark',
          "&:hover": {
            color: "primary.maiwhite",
        }}}
      >
        <Typography
          variant="h1"
          gutterBottom
        >
          Welcome to MUI-Redux
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
