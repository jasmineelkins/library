import React from "react";
import RowCard from "./RowCard";

function Row({ fetchedBooks, categoryTitle }) {
  // console.log("Fetched books: ", fetchedBooks);

  return (
    <>
      <h2 className="categoryTitle">{categoryTitle}</h2>
      <div className="bookCollectionContainer">
        {fetchedBooks.map((book) => {
          return <RowCard key={book.etag} book={book} />;
        })}
      </div>
    </>
  );
}

export default Row;
