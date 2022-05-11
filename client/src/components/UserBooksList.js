import React, { useEffect } from "react";
import BookTile from "./BookTile";

//******************* NEW ************************

function UserBooksList({ userBooksList, setUserBooksList }) {
  useEffect(() => {
    fetch(`/books`)
      .then((res) => res.json())
      .then((listOfUserBooks) => {
        console.log("User's books: ", listOfUserBooks);
        setUserBooksList(listOfUserBooks);
      })
      .catch((error) => console.log(error.message));
  }, [setUserBooksList]);

  const userBooksToDisplay = userBooksList.map((book) => {
    return <BookTile key={book.id} book={book} />;
  });

  return (
    <>
      <h2>My Books</h2>
      <div className="userBookCollectionContainer">{userBooksToDisplay}</div>
    </>
  );
}

export default UserBooksList;
