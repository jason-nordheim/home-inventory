import React from 'react';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { ThemeProvider, Typography, SvgIcon } from '@material-ui/core';
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
		<span>
			<Typography variant="h3" style={{ display: 'flex', placeContent: 'center', marginBottom: '2rem' }}>
				{title}
			</Typography>
		</span>
	);
};

export default Layout;
