import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SitePages from './data/SitePages';
import { useAuthentication, initialState } from './hooks/beta/useAuthentication'
import './style/app.css'

export const AuthorizationContext = React.createContext(initialState)

const App = () => {
  const AuthContext = useAuthentication(initialState)


	return (
    <AuthorizationContext.Provider value={AuthContext}>
      <BrowserRouter>
        <Switch
          // atEnter={{ opacity: 0 }}
          // atLeave={{ opacity: 0 }}
          // atActive={{ opacity: 1, transition: 'linear', transitionDuration: '0.2s'}}
        >
          {SitePages.map((link) => {
            return (
              <Route
                key={link.url}
                path={link.url}
                exact={link.exact}
              >
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
