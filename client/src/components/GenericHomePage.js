import React, { useState } from "react";
import Library from "./Library";

function GenericHomePage(props) {
  return (
    <div className="homeContainer">
      <h1>Welcome!</h1>
      <h2>Please log in</h2>

      <Library />
    </div>
  );
}

export default GenericHomePage;
