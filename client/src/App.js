import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthBar from "./components/AuthBar";
import GenericHomePage from "./components/GenericHomePage";
import BookSearch from "./components/BookSearch";
import UserBooksList from "./components/UserBooksList";
import BookSearchResults from "./components/BookSearchResults";

function App() {
  const [user, setUser] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [bookList, setBookList] = useState([]);
  const [userBooksList, setUserBooksList] = useState([]);

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
        <Navbar />
        <Header />

        <BrowserRouter>
          <AuthBar user={user} setUser={setUser} />
          <BookSearch
            bookList={bookList}
            setBookList={setBookList}
            userInput={userInput}
            setUserInput={setUserInput}
          />
          <BookSearchResults
            bookList={bookList}
            setUserBooksList={setUserBooksList}
            userBooksList={userBooksList}
            user={user}
          />
          {user ? (
            <UserBooksList
              userBooksList={userBooksList}
              setUserBooksList={setUserBooksList}
            />
          ) : (
            <Routes>
              <>
                <Route path="/" element={<GenericHomePage />}></Route>

                <Route
                  path="/signup"
                  element={<Signup user={user} setUser={setUser} />}
                ></Route>

                <Route
                  path="/login"
                  element={<Login user={user} setUser={setUser} />}
                ></Route>
              </>
            </Routes>
          )}
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
