import React from 'react';
import { useGlobalState } from '../Hooks/useGlobalState'
import { CreateLocationForm } from './Forms/CreateLocationForm'
import './App.css'

function App() {
  const [userState, userActions, location, locationActions] = useGlobalState();

  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <LoginForm userState={userState} userActions={userActions} />  */}
      {/* <RegisterForm userState={userState} userActions={userActions}  /> */}
      <CreateLocationForm userState={userState} userActions={userActions} location={location} locationActions={locationActions} />
    </div>
  );
}


export default App;
