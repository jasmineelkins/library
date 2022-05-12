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

  // GET all books for logged in user, regardless of status
  useEffect(() => {
    fetch(`/users/${user.id}/books`)
      .then((res) => res.json())
      .then((listOfUserBooks) => {
        console.log("User's Book List: ", listOfUserBooks);
        setUserBooksList(listOfUserBooks);
      })
      .catch((error) => console.log(error.message));
  }, []);

  // const allUserBooks = userBooksList.map((book) => {
  //   return <BookTile key={book.id} book={book} />;
  // });

  // render user's Currently Reading
  const userCurrentlyReading = userBooksList
    .filter((book) => book.status === "Currently Reading")
    .map((book) => <BookTile key={book.id} book={book} />);
  // render user's Currently Reading
  const userWantToRead = userBooksList
    .filter((book) => book.status === "Want to Read")
    .map((book) => <BookTile key={book.id} book={book} />);
  // render user's Currently Reading
  const userHaveRead = userBooksList
    .filter((book) => book.status === "Read")
    .map((book) => <BookTile key={book.id} book={book} />);

  // const testList = userBooksList.map((book) => console.log(book.status));

  return (
    <>
      <h2>My Books</h2>
      {/* <div className="userBookCollectionContainer">{userBooksToDisplay}</div> */}

      <h3>Currently Reading</h3>
      <div className="userBookCollectionContainer">{userCurrentlyReading}</div>

      <h3>Want To Read</h3>
      <div className="userBookCollectionContainer">{userWantToRead}</div>

      <h3>Have Read</h3>
      <div className="userBookCollectionContainer">{userHaveRead}</div>
    </>
  );
}

export default UserBooksList;
