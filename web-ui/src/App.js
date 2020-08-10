import React, { createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SitePages from './data/SitePages';
import useAuthentication from './hooks/useAuthentication'

const App = () => {
	const [ state, dispatch ] = useAuthentication()
	return (
		<BrowserRouter>
			<Switch>
					{SitePages.map((link) => {
						return (
							<Route key={link.url} path={link.url} exact={link.exact}>
								{link.comp}
							</Route>
						);
					})}
			</Switch>
		</BrowserRouter>
	);
};

export default App;
