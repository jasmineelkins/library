import React, { useRef } from "react";
import RowCard from "./RowCard";
import ModalShowBookDetail from "./ModalShowBookDetail";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


function Row({ fetchedBooks, categoryTitle, setClickedBook, clickedBook }) {

  const scroll = useRef()


  function closeModal () {
    setClickedBook()
  }

  function moveScrollToRight () {
    scroll.current.scrollLeft += 100
  }

  function moveScrollToLeft () {
    scroll.current.scrollLeft -= 100
  }

  return (
    <>
      <h2 className="categoryTitle">{categoryTitle}</h2>

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

      {clickedBook ? <ModalShowBookDetail closeModal={closeModal} clickedBook={clickedBook} /> : null}

      <button className="leftButton" onClick={moveScrollToLeft}><AiOutlineDoubleLeft/></button>
      <button className="leftButton" onClick={moveScrollToRight}><AiOutlineDoubleRight/></button>

    </>
  );
}

export default Row;
