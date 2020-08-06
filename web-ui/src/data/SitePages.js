import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountPage from '../Pages/Account';
import HomePage from '../Pages/Home';

export const SitePages = [
	{
		text  : 'Home',
		url   : '/',
		exact : true,
		nav   : true,
		icon  : <HomeIcon />,
		comp  : <HomePage /> 
	},
	{
		text  : 'Account',
		url   : '/account',
		exact : false,
		nav   : true,
		icon  : <AccountCircleIcon />,
		comp  : <AccountPage /> 
	}
];

export default SitePages;
