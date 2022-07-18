import React from "react";
import BookSearchTile from "./BookSearchTile";

function BookSearchResults({
  bookList,
  setUserBooksList,
  userBooksList,
  user,
  selectedStatus,
  onBookAdded,
}) {
  const onlyBooksWithImages = bookList.filter(
    (APIbook) => APIbook.volumeInfo.imageLinks
  );

  const booksToDisplay = onlyBooksWithImages.map((APIbook) => {
    // console.log("each API book author: ", APIbook.volumeInfo.authors);
    return (
      <BookSearchTile
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
