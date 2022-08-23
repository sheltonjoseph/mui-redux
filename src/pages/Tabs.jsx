import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



const LabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
    style={{ display: "flex", justifyContent: "center" }}
    maxWidth="xl"
  >
    <Box sx={{ width: '100%', typography: 'body1' ,m:10}}>
    <Typography variant="h3" sx={{ textAlign: "center" }}>
          Control your Volume
        </Typography>
      <TabContext value={value}>    
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </Container>
  );
}

export default LabTabs
