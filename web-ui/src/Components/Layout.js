import React from 'react';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { Title } from './Title'


/** override default theme settings  */
import { ThemeProvider } from '@material-ui/core';
import theme from '../style/useTheme'; 


/**
 * Component to normalize the layout of each page
 * @param {string} title title of the page 
 * @param {React.Component} children child components to be displayed   
 */
export const Layout = ({ children, title }) => {
	return (
		<ThemeProvider theme={theme}>
		{ /* always start at the top of the page */window.scrollTo(0, 0)}
			<PersistentDrawerLeft>
				{title && <Title title={title} />}
				{children}
			</PersistentDrawerLeft>
			{/* <StickyFooter />  */}
		</ThemeProvider>
	);
};

export default Layout;
