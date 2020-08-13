import React from 'react';
import { BrowserRouter Route } from 'react-router-dom';
import SitePages from './data/SitePages';
import useAuthentication, { defaultState } from './hooks/useAuthentication'
import { AnimatedSwitch } from "react-router-transition";


export const AuthorizationContext = React.createContext(defaultState)

const App = () => {
	const AuthContext = useAuthentication(defaultState)
	return (
    <AuthorizationContext.Provider value={AuthContext}>
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1, transition: 'linear', transitionDuration: '0.2s'}}
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
        </AnimatedSwitch>
      </BrowserRouter>
    </AuthorizationContext.Provider>
  );
};

export default App;
