import React from "react";
import {
  FaHeart,
  FaBookmark,
  FaPlus,
  FaBookReader,
  FaBook,
  FaBookOpen,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function BookTile({
  book,
  userBooksList,
  setUserBooksList,
  setUserClickedBook,
}) {
  const { title, authors, image, description, genre, pages } = book;

  let bookStatusIcon;

  // console.log("confirm/deny", userBooksList);

  if (book.reviews[0].status === "Currently Reading") {
    bookStatusIcon = <FaBookOpen />;
  } else if (book.reviews[0].status === "Want to Read") {
    bookStatusIcon = <FaRegBookmark />;
  } else if (book.reviews[0].status === "Read") {
    bookStatusIcon = <FaRegHeart />;
  }

  function displayBookDetails() {
    setUserClickedBook(book);
  }

  function handleClick(e) {
    e.stopPropagation();

    const { id } = book;
    fetch(`/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETED", data);
        console.log("UBL", userBooksList);
        const userBooksMinusDeleted = userBooksList.filter(
          (book) => book.id !== id
        );

        console.log(userBooksMinusDeleted);
        setUserBooksList(userBooksMinusDeleted);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <div className="bookTile" onClick={displayBookDetails}>
        <div className="bookTileImageContainer">
          <img src={image} alt={title} className="bookTileImage" />

          <div className="bookTileIconDiv">
            <span className="bookTileIcon trash">
              <button className="icon" onClick={(e) => handleClick(e)}>
                <AiFillDelete />
              </button>
            </span>
            <span className="bookTileIcon status">{bookStatusIcon}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTile;
