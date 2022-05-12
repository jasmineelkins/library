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

  const filteredBooks = bookList.filter(
    (APIbook) => APIbook.volumeInfo.imageLinks
  );

  const booksToDisplay = filteredBooks.map((APIbook) => {
    return (
      <SearchedBookCard
        key={APIbook.etag}
        APIbook={APIbook}
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
