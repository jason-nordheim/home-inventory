import React, { useState, useContext } from "react";
import { ApplicationName } from "../data/StaticContent";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Avatar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AuthorizationContext } from "../App";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import SitePages from "../data/SitePages";
import { Link } from "react-router-dom";

const PersistentDrawerLeft = ({ children }) => {
  const AuthContext = useContext(AuthorizationContext);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="persistentDrawerLeft__root">
      <AppBar
        position="fixed"
        variant="elevation"
        className={`persistentDrawerLeft__appBar`}
      >
        <Toolbar className="persistentDrawerLeft__toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <div className="persistentDrawerLeft__appNameContainer">
            <Typography variant="h4" noWrap>
              {ApplicationName}
            </Typography>
            <Avatar
              className="persistentDrawerLeft__avatar"
              alt="logo"
              variant="circle"
              src="../img/apple-touch-icon.png"
              style={{ overflow: "visible" }}
            />
          </div>
          {AuthContext.state.token && (
            <IconButton
              className="persistentDrawerLeft__logoutButton"
              color="inherit"
              aria-label="logout"
              onClick={() => AuthContext.dispatch({ type: "logout" })}
              edge="end"
            >
              <ExitToAppIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        // className={classes.drawer}
        className="persistentDrawerLeft__drawer"
        variant="persistent"
        anchor="left"
        open={open}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
      >
        <div className="persistentDrawerLeft__drawerHeader">
          <IconButton
            className="persistentDrawerLeft__iconButon"
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider className="persistentDrawerLeft__divider" />
        <List className="persistentDrawerLeft__linkList">
          {SitePages.map((link) => {
            return (
              <Link
                className="persistentDrawerLeft__link"
                key={link.text}
                to={link.url}
              >
                <ListItem button className="persistentDrawerLeft__navLink">
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <main
        className="persistentDrawerLeft__main"
        // className={clsx(classes.content, {
        //   [classes.contentShift]: open,
        // })}
      >
        <div className="persistentDrawerLeft__drawerHeader" />
        {children}
      </main>
    </div>
  );
};

export default PersistentDrawerLeft;
