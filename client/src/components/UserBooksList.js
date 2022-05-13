import React, { useState, useEffect } from "react";
import BookTile from "./BookTile";
import ImportBooks from "./ImportBooks";
import UserModalShowBookDetail from "./UserModalShowBookDetail";

function UserBooksList({
  userBooksList,
  setUserBooksList,
  user,
  setUserClickedBook,
  userClickedBook,
}) {
  function closeUserModal() {
    setUserClickedBook();
  }
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
  }, [user.id, setUserBooksList]);

  // const allUserBooks = userBooksList.map((book) => {
  //   return <BookTile key={book.id} book={book} />;
  // });

  // render user's Currently Reading
  const userCurrentlyReading = userBooksList
    .filter((book) => book.reviews[0]?.status === "Currently Reading")
    .map((book) => (
      <BookTile
        key={book.id}
        book={book}
        userBooksList={userBooksList}
        setUserBooksList={setUserBooksList}
        setUserClickedBook={setUserClickedBook}
      />
    ));

  // render user's Currently Reading
  const userWantToRead = userBooksList
    .filter((book) => book.reviews[0]?.status === "Want to Read")
    .map((book) => (
      <BookTile
        key={book.id}
        book={book}
        userBooksList={userBooksList}
        setUserBooksList={setUserBooksList}
        setUserClickedBook={setUserClickedBook}
      />
    ));

  // render user's Currently Reading
  const userHaveRead = userBooksList
    .filter((book) => book.reviews[0]?.status === "Read")
    .map((book) => (
      <BookTile
        key={book.id}
        book={book}
        userBooksList={userBooksList}
        setUserBooksList={setUserBooksList}
        setUserClickedBook={setUserClickedBook}
      />
    ));

  // const testList = userBooksList.map((book) => console.log(book.status));

  //   // import GoodReads Books CSV:
  //   function handleChange(event) {
  //     // looking for uploaded file in 'files' attribute (array). select first:
  //     this.setState({
  //       csv: event.target.files[0]
  //     })

  //     // once you have the file, need to make POST request to back end:
  //     // first, create instance of FormData & append file
  //     let formData = new FormData();
  //       formData.append('file', csv)

  //       // format POST request:

  //       let options = {
  //         method: 'POST',
  //         headers: {"Authorization": localStorage.getItem("token")},
  //         body: formData
  //       }

  //       fetch(`http://localhost:3000/api/v1/csvs`, options)
  //       .then(resp => resp.json())
  //       .then(result => {
  // alert(result.message)
  // })
  // }

  return (
    <div className="userBooksListContainer">
      <div className="userHeader">
        <h2>My Books</h2>
      </div>

      <h3>Currently Reading</h3>
      <div className="userBookCollectionContainer">{userCurrentlyReading}</div>

      <h3>Want To Read</h3>
      <div className="userBookCollectionContainer">{userWantToRead}</div>

      <h3>Read</h3>
      <div className="userBookCollectionContainer">{userHaveRead}</div>

      {userClickedBook ? (
        <UserModalShowBookDetail
          closeUserModal={closeUserModal}
          userClickedBook={userClickedBook}
        />
      ) : null}

      <ImportBooks />
    </div>
  );
}

export default UserBooksList;
