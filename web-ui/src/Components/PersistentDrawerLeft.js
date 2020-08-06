import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './PersistentDrawerLeft.styles';
import { useTheme } from '@material-ui/core/styles';
import {
	Drawer,
	AppBar,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	CssBaseline,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PersistentDrawerLeft = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const drawerLinks = [
		{
			text : 'Home',
			url  : '/',
			nav  : true,
			icon : <HomeIcon />
		},
		{
			text : 'Account',
			url  : '/account',
			nav  : true,
			icon : <AccountCircleIcon />
		}
	];

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
          <span style={{ width: '100%', textAlign: 'center'}}>
					<Typography variant="h6" noWrap>
						MyHome
					</Typography>
          </span>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper : classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{drawerLinks.map((link) => {
						return (
							<ListItem button key={link.text}>
								<ListItemIcon>{link.icon}</ListItemIcon>
								<ListItemText primary={link.text} />
							</ListItem>
						);
					})}
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				{props.children}
			</main>
		</div>
	);
};

export default PersistentDrawerLeft;
