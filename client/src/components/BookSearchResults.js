import React, { useState } from "react";
import SearchedBookCard from "./SearchedBookCard";

function BookSearchResults({
  bookList,
  setUserBooksList,
  userBooksList,
  user,
  selectedStatus,
  onBookAdded,
}) {
  //   let booksToDisplay;

  //   if (bookList && bookList !== []) {
  //     booksToDisplay = bookList.map((book) => {
  //       return <SearchedBookCard key={book.etag} book={book} />;
  //     });
  //   }

  const filteredBooks = bookList.filter((book) => book.volumeInfo.imageLinks);

  const booksToDisplay = filteredBooks.map((book) => {
    return (
      <SearchedBookCard
        key={book.etag}
        book={book}
        setUserBooksList={setUserBooksList}
        userBooksList={userBooksList}
        user={user}
        selectedStatus={selectedStatus}
        onBookAdded={onBookAdded}
      />
    );
  });

  return (
    <div className="searchedBookCollectionContainer">{booksToDisplay}</div>
  );
}

export default BookSearchResults;
