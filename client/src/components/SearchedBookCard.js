import React, { useState } from "react";
import UserBooksList from "./UserBooksList";

function SearchedBookCard({ book, setUserBooksList, userBooksList, user }) {
  function addBookToShelf() {
    const { title, authors, description, pageCount } = book.volumeInfo;

    // console.log("----Volume Info: ", book.volumeInfo);
    // console.log("----Authors: ", book.volumeInfo.authors);

    fetch(`/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: authors,
        image: book.volumeInfo.imageLinks.thumbnail,
        description: description,
        genre: "",
        pages: pageCount,
      }),
    })
      .then((res) => res.json())
      .then((bookObj) => {
        //   why doesn't added book have authors???
        console.log("Added book: ", bookObj);
        setUserBooksList([...userBooksList, bookObj]);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <>
      <div className="searchedBookCard">
        {book.volumeInfo.imageLinks === undefined ? (
          <span>undefined image links</span>
        ) : (
          <div className="searchedBookImgContainer">
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.title}
              className="searchedBookImg"
            />{" "}
            {user ? <button onClick={addBookToShelf}>Add</button> : null}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchedBookCard;
