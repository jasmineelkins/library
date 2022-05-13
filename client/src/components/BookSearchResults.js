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
  const filteredBooks = bookList.filter(
    (APIbook) => APIbook.volumeInfo.imageLinks
  );

  const booksToDisplay = filteredBooks.map((APIbook) => {
    // console.log("each API book author: ", APIbook.volumeInfo.authors);
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
