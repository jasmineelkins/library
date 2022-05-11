import React, { useState } from "react";
import { Link } from "react-router-dom";

function AuthBar({ user, setUser }) {
  // function handleLogoutClick() {
  //   //   log out user by deleting session
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //       console.log(r);
  //     }
  //   });
  // }
  return (
    <>
      <div className="authBarContainer">
        {user ? (
          <div className="welcomeMessage">
            {user ? <h3>Hi, {user.name}!</h3> : <span></span>}
          </div>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
}

export default AuthBar;
