import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthBar from "./components/AuthBar";
import GenericHomePage from "./components/GenericHomePage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <Navbar />
        <Header />

        <BrowserRouter>
          <AuthBar user={user} setUser={setUser} />
          {user ? (
            <Library />
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
