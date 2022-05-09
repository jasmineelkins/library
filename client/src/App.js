import React from "react";
import Header from "./components/Header";
import Library from "./components/Library";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <Header />
        <Library />
      </div>
      <Footer />
    </div>
  );
}

export default App;
