import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import Row from "./Row";

function Library(props) {
  const [userInput, setUserInput] = useState("");
  const [bookList, setBookList] = useState([]);
  const [fictionList, setFictionList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [nonfictionList, setnonfiction] = useState([]);
  const [youngAdultFictionList, setYoungAdultFiction] = useState([]);

  //   GET list of books by subject
  //   https://www.googleapis.com/books/v1/volumes?q=subject:fiction

  //SEARCH FUNCTION - THIS WON'T RENDER UNTIL THERE'S A USER INPUT
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&maxResults=40`
  //   )
  //     .then((res) => res.json())
  //     .then((objectContainingVolumeArray) => {
  //       console.log(objectContainingVolumeArray.items);
  //       setBookList(objectContainingVolumeArray.items);
  //     })
  //     .catch((error) => console.log(error.message));
  // }

  // GRABBING LIST OF OF BOOKS BY SUBJECT-FICTION
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction")
      .then((res) => res.json())
      .then((objectContainingFictionVolumeArray) => {
        console.log(objectContainingFictionVolumeArray.items);
        setFictionList(objectContainingFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-HISTORY
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:history")
      .then((res) => res.json())
      .then((objectContainingFictionVolumeArray) => {
        console.log(objectContainingFictionVolumeArray.items);
        setHistoryList(objectContainingFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-NONFICTION
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction")
      .then((res) => res.json())
      .then((objectContainingFictionVolumeArray) => {
        console.log(objectContainingFictionVolumeArray.items);
        setnonfiction(objectContainingFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY ADULT FICTION
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:young&adult&fiction"
    )
      .then((res) => res.json())
      .then((objectContainingFictionVolumeArray) => {
        console.log(objectContainingFictionVolumeArray.items);
        setYoungAdultFiction(objectContainingFictionVolumeArray.items);
      });
  }, []);

  return (
    <>
      <div className="booksContainer">
        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <label>Search by title:</label>
          <input
            type="text"
            name="searchInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button type="Submit">Submit</button>
        </form> */}

        <BookList bookList={bookList} />
        <Row categoryTitle="Fiction" fetchedBooks={fictionList}></Row>
        <Row categoryTitle="History" fetchedBooks={historyList}></Row>
        <Row categoryTitle="Nonfiction" fetchedBooks={nonfictionList}></Row>
        <Row
          categoryTitle="Young Adult Fiction"
          fetchedBooks={youngAdultFictionList}
        ></Row>
      </div>
    </>
  );
}

export default Library;
