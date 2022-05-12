import React, { useState } from "react";

function QuickAddStatus({ setSelectedStatus }) {
  function handleOptionSelection(e) {
    console.log("SELECTION: ", e.target.value);
    setSelectedStatus(e.target.value);
  }
  return (
    <>
      <select
        defaultValue="want"
        name="status"
        onChange={(e) => handleOptionSelection(e)}
      >
        <option value="current">Currently Reading</option>
        <option value="want">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </>
  );
}

export default QuickAddStatus;
