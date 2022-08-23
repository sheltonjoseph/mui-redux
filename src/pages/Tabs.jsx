import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopBar from "../Components/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/selectSlice";



const LabTabs = () => {
 
  const reduxTab = useSelector((state) => state.tab.value);
  console.log(reduxTab)
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
      <Box sx={{ width: "100%", typography: "body1", m: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          TABS
        </Typography>
        <TabContext value={reduxTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={(event, newInputValue) => {
              event.preventDefault();
              handleClick(newInputValue);
            }} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ipsum purus, bibendum sit amet vulputate eget, porta semper ligula.
            Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac
            dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada
            ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper
            fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum
            ultrices, metus metus finibus ex, sit amet facilisis neque enim sed
            neque. Quisque accumsan metus vel maximus consequat. Suspendisse
            lacinia tellus a libero volutpat maximus.
          </TabPanel>
          <TabPanel value="2">
            This works great when the changes can be isolated to a new DOM
            element. For instance, you can change the margin this way. However,
            sometimes you have to target the underlying DOM element. As an
            example, you may want to change the border of the Button. The Button
            component defines its own styles. CSS inheritance doesn't help. To
            workaround the problem, you can use the sx prop directly on the
            child if it is a MUI component.
          </TabPanel>
          <TabPanel value="3">
            This example also shows the use of an optional step by placing the
            optional prop on the second Step component. Note that it's up to you
            to manage when an optional step is skipped. Once you've determined
            this for a particular step you must set completed to signify
            that even though the active step index has gone beyond the optional
            step, it's not actually complete.
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default LabTabs;
