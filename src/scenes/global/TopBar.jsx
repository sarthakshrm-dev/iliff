import React, { useState } from "react";
import { Box, IconButton, useTheme, Popover, List, ListItem, ListItemText } from "@mui/material";
import { tokens } from "../../theme";
import { useEffect } from "react";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationButton, setNotificationButton] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileButton, setProfileButton] = useState(null);

  const handleNotificationClick = (event) => {
    setNotificationOpen(!notificationOpen);
    setNotificationButton(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  const handleProfileClick = (event) => {
    setProfileOpen(!profileOpen);
    setProfileButton(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setProfileOpen(false);
  };

  return (
    <Box sx={{ px: 6, py: 2 }} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <h2>Users</h2>
      <Box display={"flex"}>
        <IconButton
          type="button"
          onClick={handleNotificationClick}
          sx={{ borderRadius: "50%", width: "2.5rem", height: "2.5rem", backgroundColor: colors.purple }}
        >
          <img src={require("../../assets/notification-icon.png")} alt="" />
        </IconButton>
        <Popover
          open={notificationOpen}
          anchorEl={notificationButton}
          onClose={handleCloseNotification}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{borderRadius: "50px", marginTop: "5px"}}
        >
          <List>
            {/* You can map through your notifications here and render ListItem components with the notification content. */}
            <ListItem>
              <ListItemText primary="No notifications yet" />
            </ListItem>
          </List>
        </Popover>
        <IconButton
          type="button"
          onClick={handleProfileClick}
          sx={{
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: colors.purple,
            marginLeft: "10px",
          }}
        >
          <img src={require("../../assets/profile-icon.png")} alt="" />
        </IconButton>
        <Popover
          open={profileOpen}
          anchorEl={profileButton}
          onClose={handleCloseProfile}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{borderRadius: "50px", marginTop: "5px"}}
        >
          <List>
            <ListItem button>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default TopBar;
