import React from 'react';
import { useGlobalState } from '../Hooks/useGlobalState'
import './App.css'
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import pages from './Pages';

function App() {
  const [userState, userActions, location, locationActions] = useGlobalState();

  return (
    <div className="App">
      <Header userState={userState} userActions={userActions} /> 
      <Switch>
       { pages.map( page => <Route {...page} /> )}
      </Switch>

      {/* <LoginForm userState={userState} userActions={userActions} />  */}
      {/* <RegisterForm userState={userState} userActions={userActions}  /> */}
      {/* <CreateLocationForm userState={userState} userActions={userActions} location={location} locationActions={locationActions} /> */}
    </div>
  );
}



export default App;
