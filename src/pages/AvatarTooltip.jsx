import React from "react";
import Box from "@mui/material/Box";
import TopBar from "../Components/TopBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";


const AvatarTooltip = () => {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      maxWidth="xl"
    >
      <TopBar />
      <Box sx={{ width: "75%", m: 15 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Avatar Tooltip
        </Typography>
        <Tooltip title="Avatar Tooltip">
          <AvatarGroup
            max={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 10,
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default AvatarTooltip;
