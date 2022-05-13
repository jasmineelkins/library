import React, { useState, useEffect } from "react";
import BookSearchResults from "./BookSearchResults";
import QuickAddStatus from "./QuickAddStatus";
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

  // notify function triggers Toast:
  const notify = (title) => toast(`${title} was added to ${selectedStatus}`);

  //   GET list of books by subject:
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  // on component load fetch User's books & update User Books List
  useEffect(() => {
    fetch(`/users/${user.id}/books`)
      .then((res) => res.json())
      .then((listOfUserBooks) => {
        console.log("User's Book List: ", listOfUserBooks);
        setUserBooksList(listOfUserBooks);
      })
      .catch((error) => console.log(error.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // fetch books from API matching search by title
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=20`
    )
      .then((res) => res.json())
      .then((objectContainingVolumesArray) => {
        console.log("API search results: ", objectContainingVolumesArray.items);
        setBookList(objectContainingVolumesArray.items);
        setSearchSubmitted(true);
      })
      .catch((error) => console.log(error.message));

    setUserInput("");
  }
  return (
    <div className="bookSearchContainer">
      <h2>Search</h2>
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

      <ToastContainer position="bottom-center" toastClassName="modifiedToast" />
    </div>
  );
}

export default BookSearch;
