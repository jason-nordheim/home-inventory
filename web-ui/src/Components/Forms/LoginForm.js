import React, { useState } from "react";
import './LoginForm.css'

export function LoginForm({ userState, userActions }) {
  const handleSubmit = async (event) => {
    event.preventDefault() 
    await userActions.login();
  };

  return (
    <form>
      <section>
        <label htmlFor="username">
          Username
        </label>
        <input
          htmlFor="username"
          placeholder="username"
          onChange={(e) => userActions.setUsername(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="password">
          Password
        </label>
        <input
          htmlFor="passowrd"
          type="password"
          placeholder="password"
          onChange={(e) => userActions.setPassword(e.target.value)}
        />
      </section>
      <section>
        <button style={{ width: "25%" }} onClick={handleSubmit}>
          Login
        </button>
      </section>
    </form>
  );
}
