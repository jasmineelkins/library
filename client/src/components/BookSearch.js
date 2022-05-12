import React, { useState } from "react";
import BookSearchResults from "./BookSearchResults";
import QuickAddStatus from "./QuickAddStatus";
// import Toast from "./toast/Toast";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookSearch({
  userInput,
  setUserInput,
  bookList,
  setBookList,
  setUserBooksList,
  userBooksList,
  user,
}) {
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Want to Read");
  const notify = (title) => toast(`${title} was added to ${selectedStatus}`);

  //   GET list of books by subject:
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  function handleSubmit(e) {
    e.preventDefault();

    // fetch books from API matching search by title
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=20`
    )
      .then((res) => res.json())
      .then((objectContainingVolumeArray) => {
        console.log(objectContainingVolumeArray.items);
        setBookList(objectContainingVolumeArray.items);
        setSearchSubmitted(true);
      })
      .catch((error) => console.log(error.message));

    // reset input
    setUserInput("");
  }
  return (
    <div className="bookSearchContainer">
      <div className="bookSearchFormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="searchInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter book title"
          ></input>
          <button type="Submit">Submit</button>
        </form>

        {searchSubmitted ? (
          <div className="quickAddContainer">
            <h4>Add to shelf:</h4>
            <QuickAddStatus
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
          </div>
        ) : null}
      </div>

      <BookSearchResults
        bookList={bookList}
        setUserBooksList={setUserBooksList}
        userBooksList={userBooksList}
        user={user}
        selectedStatus={selectedStatus}
        onBookAdded={notify}
      />

      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer position="bottom-center" />
      {/* <Toast selectedStatus={selectedStatus} position="bottom-right" /> */}
    </div>
  );
}

export default BookSearch;
