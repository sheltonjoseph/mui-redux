import React from "react";
import Box from "@mui/material/Box";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/chipSlice";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Chips = () => {
  const reduxChips = useSelector((state) => state.chip.chipData);
  console.log(reduxChips);
  const dispatch = useDispatch();


  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box sx={{ width: "75%", m: 15 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Play with Chips
        </Typography>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 10,
          }}
          component="ul"
        >
          {reduxChips.map((value) => {
            let icon;

            if (value.label === "React") {
              icon = <TagFacesIcon />;
            }

            return (
              <ListItem key={value.key}>
                <Chip
                  icon={icon}
                  label={value.label}
                  onDelete={() => dispatch(update(value.key))}
                />
              </ListItem>
            );
          })}
        </Paper>
      </Box>
    </Container>
  );
};

export default Chips;
