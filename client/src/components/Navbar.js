import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
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
    <div className="navBarContainer">
      {/* <div className="welcomeMessage">
        {user ? <h3>Hi, {user.name}!</h3> : <span></span>}
      </div> */}
      {user ? (
        <>
          <Link to="/search">Search</Link>
          {/* <Link to="/books">My Books</Link> */}
          {/* <Link to="/profile">Profile</Link> */}
          <button onClick={handleLogoutClick} className="btn">
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;
