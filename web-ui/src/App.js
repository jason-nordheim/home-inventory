import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SitePages from './data/SitePages';

const App = () => {
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
