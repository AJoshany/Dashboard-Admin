import React, { useState } from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useColorMode } from './../../ThemeContext';
import SideDrawer from "../Drawer/ProfileDrawer";
import SettingsDrawer from "../Drawer/SettingsDrawer";


export default function Topbar() {
  const [showNotifs, setShowNotifs] = useState(null);
  const [showLanguages, setShowLanguages] = useState(null);
  // const { toggleColorMode, mode } = useColorMode();

  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
  const toggleProfileDrawer = (newOpen) => () => {
    setOpenProfileDrawer(newOpen);
  }

  const [openSettingsDrawer, setOpenSettingsDrawer] = useState(false);
  const toggleSettingsDrawer = (newOpen) => () => {
    setOpenSettingsDrawer(newOpen);
  }


  const languageClickHandler = (event) => {
    setShowLanguages(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setShowLanguages(null);
  };

  const notifClickHandler = (event) => {
    setShowNotifs(event.currentTarget);
  };

  const handleNotifClose = () => {
    setShowNotifs(null);
  };

  const openNotif = Boolean(showNotifs);
  const NotifId = openNotif ? 'simple-popover' : undefined;

  const openLanguage = Boolean(showLanguages);
  const languageId = openLanguage ? 'simple-popover' : undefined;

  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link className="link" to="/">
              <span className="logo"> Ali Joshany ❤</span>
            </Link>
          </div>

          <div className="topRight">
            {/* Dark Mode Button */}
            {/* <div className="topbarIconContainer">
          <button className="topbarColorMode" onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </button>
          </div> */}
            <div className="topbarIconContainer" aria-describedby={NotifId} onClick={notifClickHandler}>
              <NotificationsIcon />
              <span className="topIconBadge">2</span>
            </div>
            <Popover
              id={NotifId}
              open={openNotif}
              anchorEl={showNotifs}
              onClose={handleNotifClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>Notifications</Typography>
            </Popover>

            <div className="topbarIconContainer" aria-describedby={languageId} onClick={languageClickHandler}>
              <LanguageIcon />
              <span className="topIconBadge">2</span>
            </div>
            <Popover
              id={languageId}
              open={openLanguage}
              anchorEl={showLanguages}
              onClose={handleLanguageClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}

            >
              <FormControl className="languagePropover">
                <FormLabel id="demo-radio-buttons-group-label" className="languagePropoverTitle">Language</FormLabel>
                <RadioGroup
                  className="languagePropoverRadio"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel className="languagePropoverLabel" value="female" control={<Radio />} label="Persian" />
                  <FormControlLabel className="languagePropoverLabel" value="male" control={<Radio />} label="English" />
                </RadioGroup>
              </FormControl>
            </Popover>
            <div className="topbarIconContainer">
              <SettingsIcon onClick={toggleSettingsDrawer(true)}/>
            </div>
            <img src="images/1.jpg" className="topAvatar"
              onClick={toggleProfileDrawer(true)}
            />
          </div>
        </div>
      </div>
      <SideDrawer open={openProfileDrawer} toggleDrawer={toggleProfileDrawer}/>
      <SettingsDrawer open={openSettingsDrawer} toggleDrawer={toggleSettingsDrawer} />
    </>
  );
}

