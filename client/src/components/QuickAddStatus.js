import React, { useState } from "react";

function QuickAddStatus({ setSelectedStatus }) {
  function handleOptionSelection(e) {
    // console.log("SELECTION: ", e.target.value);
    setSelectedStatus(e.target.value);
  }
  return (
    <>
      <select
        defaultValue="Want to Read"
        name="status"
        onChange={(e) => handleOptionSelection(e)}
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
      </select>
    </>
  );
}

export default QuickAddStatus;
