import React, { useState } from "react";
import { Link } from "react-router-dom";

function AuthBar({ user, setUser }) {
  function handleLogoutClick() {
    //   log out user by deleting session
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log(r);
      }
    });
  }
  return (
    <>
      <div className="welcomeMessage">
        {user ? (
          <span>Welcome, {user.username}</span>
        ) : (
          <span>Please log in</span>
        )}
      </div>

      <div className="authBarContainer">
        <Link to="/">Home</Link>

        {user ? (
          <button onClick={handleLogoutClick} className="btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
}

export default AuthBar;
