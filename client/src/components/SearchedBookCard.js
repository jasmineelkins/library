import React, { useState } from "react";
import UserBooksList from "./UserBooksList";
// import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import {
  FaHeart,
  FaBookmark,
  FaPlus,
  FaBookReader,
  FaBook,
  FaBookOpen,
  FaRegBookmark,
} from "react-icons/fa";

function SearchedBookCard({
  APIbook,
  setUserBooksList,
  userBooksList,
  user,
  selectedStatus,
  onBookAdded,
}) {
  const [selectedBook, setSelectedBook] = useState({});

  function addBookToDatabase() {
    const { title, description, pageCount } = APIbook.volumeInfo;
    const [authors] = APIbook.volumeInfo.authors;

    // UBL is empty because it renders only on My Books component..not Search
    console.log("User Book List before adding new APIbook: ", userBooksList);

    fetch(`/books`, {
      // adds book to User Booklist
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: authors,
        image: APIbook.volumeInfo.imageLinks.thumbnail,
        description: description,
        genre: "",
        pages: pageCount,
      }),
    })
      .then((res) => res.json())
      .then((bookObj) => {
        console.log("Added book: ", bookObj);
        createBookReview(bookObj);
      })
      .catch((error) => console.log(error.message));
  }

  function createBookReview(bookObj) {
    fetch(`reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        content: `Associating ${bookObj.title} to user: ${user.name}`,
        rating: null,
        book_id: bookObj.id,
        user_id: user.id,
        status: selectedStatus,
      }),
    })
      .then((res) => res.json())
      .then((reviewObj) => {
        console.log("Review: ", reviewObj);

        // triggers Toast with book title and shelf info
        onBookAdded(bookObj.title);

        setUserBooksList([...userBooksList, bookObj]);
        // console.log("AFTER ADDING BOOK TO USER BOOK LIST", userBooksList);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <div className="searchedBookCard">
        {APIbook.volumeInfo.imageLinks === undefined ? (
          <span>undefined image links</span>
        ) : (
          <div className="searchedBookImgContainer">
            <img
              src={APIbook.volumeInfo.imageLinks.smallThumbnail}
              alt={APIbook.title}
              className="searchedBookImg"
            />{" "}
            {/* {user ? <button onClick={addBookToShelf}>Add</button> : null} */}
            <div className="searchedBookButtonDiv">
              {" "}
              {/* <button onClick={addBookToShelf}>
                <AiOutlinePlus />
              </button> */}
              <button onClick={addBookToDatabase} className="icon">
                <FaPlus />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchedBookCard;
