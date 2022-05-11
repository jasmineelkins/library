import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthBar from "./components/AuthBar";
import GenericHomePage from "./components/GenericHomePage";
import BookSearch from "./components/BookSearch";
import UserBooksList from "./components/UserBooksList";
import BookSearchResults from "./components/BookSearchResults";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [bookList, setBookList] = useState([]);
  const [userBooksList, setUserBooksList] = useState([]);
  const [clickedBook, setClickedBook] = useState(null);

  // console.log("SPECIFIC BOOK'S ID/ETAG", clickedBook.etag)

  // AUTO LOGIN
  useEffect(() => {
    fetch(`/me`)
      .then((res) => res.json())
      .then((userObj) => {
        console.log("logged in", userObj);

        if (userObj.username) {
          setUser(userObj);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <BrowserRouter>
          <Navbar user={user} setUser={setUser} />
          <Header />
          <AuthBar user={user} setUser={setUser} />

          <Routes>
            {user ? (
              <>
                <Route
                  path="/search"
                  element={
                    <BookSearch
                      bookList={bookList}
                      setBookList={setBookList}
                      userInput={userInput}
                      setUserInput={setUserInput}
                      setUserBooksList={setUserBooksList}
                      userBooksList={userBooksList}
                      user={user}
                    />
                  }
                ></Route>

                <Route
                  path="/"
                  element={
                    <UserBooksList
                      userBooksList={userBooksList}
                      setUserBooksList={setUserBooksList}
                      user={user}
                    />
                  }
                ></Route>

                <Route
                  path="/profile"
                  element={<Profile user={user} />}
                ></Route>
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <GenericHomePage
                      setClickedBook={setClickedBook}
                      clickedBook={clickedBook}
                    />
                  }
                ></Route>

                <Route
                  path="/signup"
                  element={<Signup user={user} setUser={setUser} />}
                ></Route>

                <Route
                  path="/login"
                  element={<Login user={user} setUser={setUser} />}
                ></Route>
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
