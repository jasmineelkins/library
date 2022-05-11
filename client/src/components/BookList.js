import React from "react";
import BookCard from "./BookCard";

function BookList({ bookList  }) {

  const booksToDisplay = bookList.map((book) => {
    return <BookCard key={book.etag} book={book} />;
  });

  return (
    <>
      <div className="bookCollectionContainer">{booksToDisplay}</div>
    </>
  );
}

export default BookList;
