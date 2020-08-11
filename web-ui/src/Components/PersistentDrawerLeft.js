import React, { useState, useContext } from "react";
import clsx from "clsx";
import { ApplicationName } from "../data/StaticContent";
import { useDrawerStyless } from "../style/useDrawerStyles";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Avatar,
  Container,
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
  const classes = useDrawerStyless(theme);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        variant="elevation"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Container style={{display: 'flex', flex: 0}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
							flex: 1
            }}
          >
            <Typography variant="h4" noWrap>
              {ApplicationName}
            </Typography>
            <Avatar
              style={{ marginLeft: "10px" }}
              alt="logo"
              variant="circle"
              src="../img/apple-touch-icon.png"
            />
          </Container>
          {AuthContext.state.token && (
            <Container style={{ display: 'flex', flexDirection: 'row-reverse', flex: 0}}>
              <IconButton
                color="inherit"
                aria-label="logout"
                onClick={() => AuthContext.dispatch({ type: "logout" })}
                edge="end"
              >
                <ExitToAppIcon />
              </IconButton>
            </Container>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {SitePages.map((link) => {
            return (
              <Link className={classes.navLink} key={link.text} to={link.url}>
                <ListItem button>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default PersistentDrawerLeft;
