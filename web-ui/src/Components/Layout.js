import React from 'react';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../style/useTheme';
// import StickyFooter from './StickyFooter'

const Layout = ({ children, title }) => {
	return (
		<ThemeProvider theme={theme}>
			<PersistentDrawerLeft>
				{title && <Title title={title} />}
				{children}
			</PersistentDrawerLeft>
			{/* <StickyFooter />  */}
		</ThemeProvider>
	);
};

const Title = ({ title, props }) => {
	return (
		<span className="title__container">
			<Typography variant="h3" style={{ display: 'flex', placeContent: 'center', marginBottom: '1rem' }}>
				{title}
			</Typography>
			<hr /> 
		</span>
	);
};

export default Layout;
