import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopBar from "../Components/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../Redux/TabSlice";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



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
      <Box sx={{ width: '100%' , m:20}}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
          TABS
        </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={reduxTab} onChange={(event, newInputValue) => {
              event.preventDefault();
              handleClick(newInputValue);
            }} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={reduxTab} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={reduxTab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={reduxTab} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Container>
  );
};

export default LabTabs;
