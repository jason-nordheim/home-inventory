import React from 'react';
import { useGlobalState } from '../Hooks/useGlobalState'
import { CreateLocationForm } from './Forms/CreateLocationForm'
import './App.css'
import Header from './Header';

function App() {
  const [userState, userActions, location, locationActions] = useGlobalState();

  return (
    <div className="App">
      <Header /> 
      {/* <LoginForm userState={userState} userActions={userActions} />  */}
      {/* <RegisterForm userState={userState} userActions={userActions}  /> */}
      {/* <CreateLocationForm userState={userState} userActions={userActions} location={location} locationActions={locationActions} /> */}
    </div>
  );
}


export default App;
