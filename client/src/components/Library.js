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
  const [cookBookList, setCookBookList] = useState([]);
  const [scienceFictionList, setScienceFictionList] = useState([]);
  const [childrenBookList, setChildrenBookList] = useState([]);

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
        // console.log("Fiction list: ", objectContainingFictionVolumeArray.items);
        setFictionList(objectContainingFictionVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-HISTORY
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:history")
      .then((res) => res.json())
      .then((objectContainingHistoryVolumeArray) => {
        // console.log("History list: ", objectContainingHistoryVolumeArray.items);
        setHistoryList(objectContainingHistoryVolumeArray.items);
      });
  }, []);

  // GRABBING LIST OF OF BOOKS BY SUBJECT-NONFICTION
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction")
      .then((res) => res.json())
      .then((objectContainingNonFictionVolumeArray) => {
        // console.log(
        //   "Non-Fiction list: ",
        //   objectContainingNonFictionVolumeArray.items
        // );
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
        // console.log(
        //   "YA Fiction list: ",
        //   objectContainingYAFictionVolumeArray.items
        // );
        setYoungAdultFiction(objectContainingYAFictionVolumeArray.items);
      });
  }, []);

    // GRABBING LIST OF OF BOOKS BY COOKING
    useEffect(() => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:cookbook"
      )
        .then((res) => res.json())
        .then((objectContainingCookbookVolumeArray) => {
        setCookBookList(objectContainingCookbookVolumeArray.items);
        });
    }, []);

    // GRABBING LIST OF OF BOOKS BY SCIENCE FICTION
    useEffect(() => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:science&fiction"
      )
        .then((res) => res.json())
        .then((objectContainingScienceFictionVolumeArray) => {
        setScienceFictionList(objectContainingScienceFictionVolumeArray.items);
        });
    }, []);
      
    // GRABBING LIST OF BOOKS BY CHILDRENS BOOK
    useEffect(() => {
      fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:children"
        )
          .then((res) => res.json())
          .then((objectContainingChildrenVolumeArray) => {
          setChildrenBookList(objectContainingChildrenVolumeArray.items);
          });
     }, []);

     //NYT LIST OF BOOKS TEST
    useEffect(() => {
      fetch(
        'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=IZayAdS1oNAENMGciuxbukqhaixXSPdd'
      )
      .then((res) => res.json())
      .then((nytlist) => console.log(nytlist))
    },[])

  return (
    <>
      <div className="booksContainer">
        <Row
          categoryTitle="Fiction"
          fetchedBooks={fictionList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>
        <Row 
          categoryTitle="History" 
          fetchedBooks={historyList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>

        <Row 
          categoryTitle="Nonfiction" 
          fetchedBooks={nonfictionList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>

        <Row
          categoryTitle="Cookbooks"
          fetchedBooks={cookBookList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>

        <Row
          categoryTitle="Children"
          fetchedBooks={childrenBookList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>

        <Row
          categoryTitle="Science Fiction"
          fetchedBooks={scienceFictionList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>

        <Row
          categoryTitle="Young Adult Fiction"
          fetchedBooks={youngAdultFictionList}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        ></Row>




      </div>
    </>
  );
}

export default Library;
