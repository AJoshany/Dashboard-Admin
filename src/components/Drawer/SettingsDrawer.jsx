import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SettingsDrawer = ({ open, toggleDrawer, topOffset = "0px" }) => {
  const settingsItems = [
    { text: "General Settings", icon: <SettingsIcon /> },
    { text: "Privacy & Security", icon: <LockIcon /> },
    { text: "Notifications", icon: <NotificationsIcon /> },
    { text: "Language", icon: <LanguageIcon /> },
    { text: "Theme", icon: <ColorLensIcon /> },
    { text: "Help & Support", icon: <HelpOutlineIcon /> },
  ];

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {settingsItems.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          top: topOffset,
          height: `calc(100% - ${topOffset})`,
        },
      }}
    >
        <h2 style={{textAlign :"center", marginTop :"20px" , marginBottom: "10px"}}>Setting</h2>
      {list}
    </Drawer>
  );
};

export default SettingsDrawer;
