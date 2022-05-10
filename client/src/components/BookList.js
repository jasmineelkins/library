import React from "react";
import BookCard from "./BookCard";

function BookList({ bookList }) {
  let booksToDisplay;

  if (bookList && bookList !== {}) {
    booksToDisplay = bookList.map((book) => {
      return <BookCard key={book.etag} book={book} />;
    });
  }

  return (
    <>
      <h2>My Books</h2>
      <div className="bookCollectionContainer">{booksToDisplay}</div>
    </>
  );
}

export default BookList;
