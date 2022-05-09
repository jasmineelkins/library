import React, { useState, useEffect } from "react";

function Library(props) {
  const [userInput, setUserInput] = useState("");
  //   const [bookList, setBookList] = useState([]);

  //   GET list of books by subject
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  function handleSubmit(e) {
    e.preventDefault();

    // do things

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=40&key=AIzaSyDXn2YBqBRlTeRmMo-T9VUhvH-1Ovo93Ww`
    )
      .then((res) => res.json())
      .then((listOfVolumeObjects) => console.log(listOfVolumeObjects))
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <div>
        <h2>Books:</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Search by title:</label>
          <input
            type="text"
            name="searchInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button type="Submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Library;
