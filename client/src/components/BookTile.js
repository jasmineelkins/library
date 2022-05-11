import React from "react";

//******************* NEW ************************

function BookTile({ book }) {
  const { title, authors, image, description, genre, pages } = book;

  return (
    <>
      <div className="bookTile">
        <div className="bookTileImageContainer">
          <img src={image} alt={title} className="bookTileImage" />
        </div>
      </div>
    </>
  );
}

export default BookTile;
