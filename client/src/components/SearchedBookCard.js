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

    // URL is empty because it renders only on My Books component..not Search
    console.log("User Book List before adding new APIbook: ", userBooksList);

    createNewBook(title, description, pageCount, authors);
  }

  async function createNewBook(title, description, pageCount, authors) {
    // adds book to User Booklist

    // TODO: I think this URL is wrong
    try {
      const response = await fetch(`/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          author: authors,
          image: APIbook.volumeInfo.imageLinks.thumbnail,
          description: description,
          genre: "",
          pages: pageCount,
        }),
      });
      const bookObj = await response.json();

      console.log("Added book: ", bookObj);
      createBookReview(bookObj);
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  async function createBookReview(bookObj) {
    try {
      const response = await fetch(`/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `Associating ${bookObj.title} to user: ${user.name}`,
          rating: null,
          book_id: bookObj.id,
          user_id: user.id,
          status: selectedStatus,
        }),
      });
      const reviewObj = await response.json();

      console.log("Review: ", reviewObj);

      // triggers Toast with book title and shelf info
      onBookAdded(bookObj.title);

      setUserBooksList([...userBooksList, bookObj]);
      // console.log("AFTER ADDING BOOK TO USER BOOK LIST", userBooksList);
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
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
