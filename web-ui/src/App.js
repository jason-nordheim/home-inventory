import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SitePages from './data/SitePages';
import useAuthentication from './hooks/useAuthentication'
import { AuthorizationContext } from './AuthorizationContext'

const App = () => {
	const [ state, dispatch ] = useAuthentication()
	return (
		<AuthorizationContext.Provider value={{state, dispatch}} >
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
		</AuthorizationContext.Provider>
	);
};

export default App;
