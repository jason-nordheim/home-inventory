import React, { useState } from "react";
import "./RegisterForm.css";

export function RegisterForm({ userState, userActions }) {

  const handleRegister = async (event) => {
    event.preventDefault() 
    await userActions.register()

  }

  return (
    <form>
      <div>
        <label aria-label="First name">First</label>
        <input
          htmlFor="first"
          value={userState.user.first || ""}
          onChange={(e) => userActions.setFirst(e.target.value)}
        />
      </div>
      <div>
        <label aria-label="last name">Last</label>
        <input
          htmlFor="last"
          value={userState.user.last || ""}
          onChange={(e) => userActions.setLast(e.target.value)}
        />
      </div>
      <div>
        <label aria-label="email">Email</label>
        <input
          htmlFor="email"
          value={userState.user.email || ""}
          type="email"
          onChange={(e) => userActions.setEmail(e.target.value)}
        />
      </div>
      <div>
        <label area-label="bio">Bio</label>
        <textarea
          value={userState.user.bio || ""}
          rows="4"
          onChange={(e) => userActions.setBio(e.target.value)}
        />
      </div>
      <div>
        <label aria-label="username">Username</label>
        <input
          value={userState.user.username || ""}
          onChange={(e) => userActions.setUsername(e.target.value)}
        />
      </div>
      <div>
        <label aria-label="password">Password</label>
        <input
          value={userState.user.password || ""}
          type="password"
          onChange={(e) => userActions.setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </form>
  );
}
