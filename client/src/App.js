import React from "react";
import Header from "./components/Header";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <Navbar />
        <Header />
        <Signup />
        <Login />
        <Library />
      </div>
      <Footer />
    </div>
  );
}

export default App;
