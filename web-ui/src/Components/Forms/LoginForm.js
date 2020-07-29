import React, { useState } from "react";
import './LoginForm.css'

export function LoginForm({ userState, userActions }) {
  const handleSubmit = async (event) => {
    event.preventDefault() 
    await userActions.login();
  };

  return (
    <form>
      <div> 
        <h1>Login</h1>
      </div>
      <div>
        <label htmlFor="username">
          Username
        </label>
        <input
          htmlFor="username"
          placeholder="username"
          onChange={(e) => userActions.setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          htmlFor="passowrd"
          type="password"
          placeholder="password"
          onChange={(e) => userActions.setPassword(e.target.value)}
        />
      </div>
      <div>
        <button style={{ width: "25%" }} onClick={handleSubmit}>
          Login
        </button>
      </div>
    </form>
  );
}
