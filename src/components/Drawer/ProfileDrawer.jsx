import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

const SideDrawer = ({ open, toggleDrawer, topOffset = "0px" }) => {
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {/* User Info */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
                <Avatar src="images/1.jpg" sx={{ width: 64, height: 64 }} />
                <Typography variant="h6" sx={{ mt: 1 }}>
                    Ali Joshany
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ali.j@example.com
                </Typography>
            </Box>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TranslateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Change Language" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Toggle Theme" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        {/* <ListItemText primary="Log out" /> */}
                        <Link to="/" className="link">Log out</Link>
                    </ListItemButton>
                </ListItem>
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
            {list}
        </Drawer>
    );
};

export default SideDrawer;
