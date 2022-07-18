import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    //   log out user by deleting session
    deleteUserSession();
  }

  async function deleteUserSession() {
    try {
      const response = await fetch(`/logout`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUser(null);
        console.log(response);
      }
      navigate("/");
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  return (
    <div className="navBarContainer">
      <div className="welcomeMessage">
        {user ? <h3>Hi, {user.name}!</h3> : <span></span>}
      </div>

      <div className="navBarLinks">
        <Link to="/search">Search</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/">My Books</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogoutClick} className="btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
