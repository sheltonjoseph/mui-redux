import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector , useDispatch} from "react-redux";
import {  check } from "../Redux/userSlice";

const CheckBox = () => {
//   const [checked, setChecked] =useState([0]);
  const dispatch = useDispatch();

var checkedBox = useSelector((state) => state.checking.checked)
//   const checked = useSelector((state) => state.user.checked);
//   console.log(checked)
console.log(checkedBox)
  const handleToggle = (value) => () => {
    const currentIndex = checkedBox.indexOf(value);
    const newChecked = [...checkedBox];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    dispatch(check({checkedBox}))
  };


  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box component="main" sx={{ m: 20 }}>
        <Paper elevation={3}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checkedBox.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default CheckBox;
