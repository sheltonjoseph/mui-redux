import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const drawerWidth = 240;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
      </Link>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/autocomplete"}>
              <ListItemText primary="Autocomplete" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/checkbox"}>
              <ListItemText primary="CheckBox" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/button"}>
              <ListItemText primary="Buttons" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/select"}>
              <ListItemText primary="Select" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/slider"}>
              <ListItemText primary="Slider" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/avatar"}>
              <ListItemText primary="Avatar Tooltip" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/chips"}>
              <ListItemText primary="Chips" />
            </Link>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={"/list"}>
              <ListItemText primary="lists" />
            </Link>
          </ListItemButton>
          </ListItem>
          {/* <Link>
              <ListItemText primary="checkBox" />
            </Link>
            <Link>
              <ListItemText primary="ActiveGroup" />
            </Link> */}
        
      </List>
    </Box>
  );

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: "Urbanist",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EAGLE
          </Typography>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default TopBar;
