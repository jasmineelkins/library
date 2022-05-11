import React, { useState } from "react";
import BookSearchResults from "./BookSearchResults";

function BookSearch({
  userInput,
  setUserInput,
  bookList,
  setBookList,
  setUserBooksList,
  userBooksList,
  user,
}) {
  //   GET list of books by subject:
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  function handleSubmit(e) {
    e.preventDefault();

    // fetch books from API matching search by title
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=20`
    )
      .then((res) => res.json())
      .then((objectContainingVolumeArray) => {
        console.log(objectContainingVolumeArray.items);
        setBookList(objectContainingVolumeArray.items);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <>
      <div className="booksContainer">
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

      <BookSearchResults
        bookList={bookList}
        setUserBooksList={setUserBooksList}
        userBooksList={userBooksList}
        user={user}
      />
    </>
  );
}

export default BookSearch;
