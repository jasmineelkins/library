import React, { useState, useEffect } from "react";
import BookList from './BookList'

function Library(props) {
  const [userInput, setUserInput] = useState("");
  const [bookListObj, setBookListObj] = useState([]);

  //   GET list of books by subject
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  function handleSubmit(e) {
    e.preventDefault();
    // do things

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=40`
    )
      .then((res) => res.json())
      .then((objectContainingVolumeArray) => {
        console.log(objectContainingVolumeArray.items)
        setBookListObj(objectContainingVolumeArray.items)})
      .catch((error) => console.log(error.message));
  }


  return (
    <>
      <div>
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

        <h2>Books:</h2>
        <BookList bookListObj={bookListObj} />
      </div>
    </>
  );
}

export default Library;
