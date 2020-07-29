import React from 'react';
import { LoginForm } from './LoginForm'
import { useGlobalState } from '../Hooks/useGlobalState'
import './App.css'
import { RegisterForm } from './RegisterForm'

function App() {
  const [userState, userActions] = useGlobalState();

  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <LoginForm userState={userState} userActions={userActions} />  */}
      <RegisterForm userState={userState} userActions={userActions}  />
    </div>
  );
}


export default App;
