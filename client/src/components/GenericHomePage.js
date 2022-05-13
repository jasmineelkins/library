import React, { useState } from "react";
import Library from "./Library";

function GenericHomePage({ setClickedBook, clickedBook }) {
  return (
    <div className="homeContainer">
      <h1>Welcome!</h1>
      <h2>Please log in to explore</h2>

      <Library setClickedBook={setClickedBook} clickedBook={clickedBook}  />
    </div>
  );
}

export default GenericHomePage;
