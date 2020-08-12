import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SitePages from './data/SitePages';
import useAuthentication, { defaultState } from './hooks/useAuthentication'


export const AuthorizationContext = React.createContext(defaultState)

const App = () => {
	const AuthContext = useAuthentication(defaultState)
	return (
		<AuthorizationContext.Provider value={AuthContext} >
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
