import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import Row from "./Row";

function Library({ clickedBook, setClickedBook }) {
  // const [userInput, setUserInput] = useState("");
  // const [bookList, setBookList] = useState([]);
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
  //     .then((objectContainingVolumesArray) => {
  //       console.log(objectContainingVolumesArray.items);
  //       setBookList(objectContainingVolumesArray.items);
  //     })
  //     .catch((error) => console.log(error.message));
  // }

  // GRABBING LIST OF OF BOOKS BY SUBJECT-FICTION
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction")
      .then((res) => res.json())
      .then((objectContainingFictionVolumeArray) => {
        console.log("Fiction list: ", objectContainingFictionVolumeArray.items);
        setFictionList(objectContainingFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-HISTORY
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:history")
      .then((res) => res.json())
      .then((objectContainingHistoryVolumeArray) => {
        console.log("History list: ", objectContainingHistoryVolumeArray.items);
        setHistoryList(objectContainingHistoryVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-NONFICTION
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction")
      .then((res) => res.json())
      .then((objectContainingNonFictionVolumeArray) => {
        console.log(
          "Non-Fiction list: ",
          objectContainingNonFictionVolumeArray.items
        );
        setnonfiction(objectContainingNonFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY ADULT FICTION
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:young&adult&fiction"
    )
      .then((res) => res.json())
      .then((objectContainingYAFictionVolumeArray) => {
        console.log(
          "YA Fiction list: ",
          objectContainingYAFictionVolumeArray.items
        );
        setYoungAdultFiction(objectContainingYAFictionVolumeArray.items);
      });
  }, []);

  return (
    <>
      <div className="booksContainer">
        <Row
          categoryTitle="Fiction"
          fetchedBooks={fictionList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>
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
