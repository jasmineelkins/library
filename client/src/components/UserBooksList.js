import React, { useEffect } from "react";
import BookTile from "./BookTile";

//******************* NEW ************************

function UserBooksList({ userBooksList, setUserBooksList, user }) {
  // GET all books
  // useEffect(() => {
  //   fetch(`/books`)
  //     .then((res) => res.json())
  //     .then((listOfUserBooks) => {
  //       console.log("User's books: ", listOfUserBooks);
  //       setUserBooksList(listOfUserBooks);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, [setUserBooksList]);

  // const userBooksToDisplay = userBooksList.map((book) => {
  //   return <BookTile key={book.id} book={book} />;
  // });

  // GET books for logged in user
  useEffect(() => {
    fetch(`/users/${user.id}/books`)
      .then((res) => res.json())
      .then((listOfUserBooks) => {
        console.log("User's books: ", listOfUserBooks);
        setUserBooksList(listOfUserBooks);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const userBooksToDisplay = userBooksList.map((book) => {
    return <BookTile key={book.id} book={book} />;
  });

  return (
    <>
      <h2>My Books</h2>
      <div className="userBookCollectionContainer">{userBooksToDisplay}</div>

      <h3>Currently Reading</h3>

      <h3>Want To Read</h3>

      <h3>Have Read</h3>
    </>
  );
}

export default UserBooksList;
