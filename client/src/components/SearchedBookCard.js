import React, { useState } from "react";
import UserBooksList from "./UserBooksList";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { FaHeart, FaBookmark } from "react-icons/fa";

function SearchedBookCard({
  book,
  setUserBooksList,
  userBooksList,
  user,
  selectedStatus,
  onBookAdded,
}) {
  const [selectedBook, setSelectedBook] = useState({});

  function addBookToShelf() {
    // add book to specific shelf
  }

  function addBookToDatabase() {
    const { title, authors, description, pageCount } = book.volumeInfo;

    // console.log("----Volume Info: ", book.volumeInfo);
    // console.log("----Authors: ", book.volumeInfo.authors);

    fetch(`/books`, {
      // adds book to booklist
      // need to attach to user, shelf, review
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: authors,
        image: book.volumeInfo.imageLinks.thumbnail,
        description: description,
        genre: "",
        pages: pageCount,
      }),
    })
      .then((res) => res.json())
      .then((bookObj) => {
        //   why doesn't added book have authors???
        console.log("Added book: ", bookObj);

        // add saved book to user's book list. not currently useful.
        // setUserBooksList([...userBooksList, bookObj]);

        // set Selected Book state to this book
        // setSelectedBook(bookObj);

        createBookReview(bookObj.id, bookObj.title);
      })
      .catch((error) => console.log(error.message));
  }

  function createBookReview(id, title) {
    fetch(`reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        content: `Associating ${title} to user: ${user.name}`,
        rating: null,
        book_id: id,
        user_id: user.id,
        status: selectedStatus,
      }),
    })
      .then((res) => res.json())
      .then((reviewObj) => {
        console.log("Review: ", reviewObj);
        onBookAdded(title);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <>
      <div className="searchedBookCard">
        {book.volumeInfo.imageLinks === undefined ? (
          <span>undefined image links</span>
        ) : (
          <div className="searchedBookImgContainer">
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.title}
              className="searchedBookImg"
            />{" "}
            {/* {user ? <button onClick={addBookToShelf}>Add</button> : null} */}
            <div className="searchedBookButtonDiv">
              {" "}
              {/* <button onClick={addBookToShelf}>
                <AiOutlinePlus />
              </button> */}
              <button onClick={addBookToDatabase} className="reviewBtn">
                <FaBookmark />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchedBookCard;
