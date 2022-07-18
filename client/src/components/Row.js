import React, { useRef } from "react";
import RowCard from "./RowCard";
import ModalShowBookDetail from "./ModalShowBookDetail";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Row({
  fetchedBooks,
  categoryTitle,
  setClickedBook,
  clickedBook,
  user,
}) {
  const scroll = useRef();

  function closeModal() {
    setClickedBook();
  }

  function moveScrollToRight() {
    scroll.current.scrollLeft += 350;
  }

  function moveScrollToLeft() {
    scroll.current.scrollLeft -= 350;
  }

  return (
    <>
      <h2 className="categoryTitle">
        <button className="scrollBtn" onClick={moveScrollToLeft}>
          <AiOutlineDoubleLeft />
        </button>
        {categoryTitle}
        <button className="scrollBtn" onClick={moveScrollToRight}>
          <AiOutlineDoubleRight />
        </button>
      </h2>

      <div className="bookCollectionContainer" ref={scroll}>
        {fetchedBooks.map((book) => {
          return (
            <RowCard
              key={book.etag}
              book={book}
              setClickedBook={setClickedBook}
            />
          );
        })}
      </div>

      {clickedBook ? (
        <ModalShowBookDetail
          closeModal={closeModal}
          clickedBook={clickedBook}
          user={user}
        />
      ) : null}
    </>
  );
}

export default Row;
