import React, { useState } from "react";

function QuickAddStatus({ setSelectedStatus }) {
  function handleOptionSelection(e) {
    console.log("SELECTION: ", e.target.value);
    setSelectedStatus(e.target.value);
  }
  return (
    <>
      <form>
        <select onChange={(e) => handleOptionSelection(e)}>
          <option>Currently Reading</option>
          <option>Want to Read</option>
          <option>Read</option>
        </select>
      </form>
    </>
  );
}

export default QuickAddStatus;
