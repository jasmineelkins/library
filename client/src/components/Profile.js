import React, { useState } from "react";

function Profile({ user }) {
  //   const year = user.created_at.slice(0, 2);
  //   const month = user.created_at.slice(5, 7);
  //   const day = user.created_at.slice(8, 10);
  //   let joinedDate = `${month}-${day}-${year}`;

  return (
    <div className="profileContainer">
      <h2>Profile</h2>
      <div className="profileInnerDiv">
        <span>Name: {user.name}</span>
        <span>Username: {user.username}</span>
        <span>Date joined: {user.created_at}</span>
      </div>
    </div>
  );
}

export default Profile;
