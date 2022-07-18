import React, { useState } from "react";
import Library from "./Library";

function GenericHomePage({ setClickedBook, clickedBook, user }) {
  return (
    <div className="homeContainer">
      <div className="homeGreeting">
        <div className="homeGreetingInner">
          <h1>Welcome!</h1>
          <h2>Please log in</h2>
        </div>
      </div>

      <h3>Discover new books:</h3>

      <Library
        setClickedBook={setClickedBook}
        clickedBook={clickedBook}
        user={user}
      />
    </div>
  );
}

export default GenericHomePage;
