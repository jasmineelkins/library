import React from 'react'
import RowCard from './RowCard'
import ModalShowBookDetail from './ModalShowBookDetail'

function Row({fetchedBooks, categoryTitle, setClickedBook, clickedBook}) {

  return (
    <>
    <h2 className="categoryTitle">{categoryTitle}</h2>

        <div className="bookCollectionContainer">
          {fetchedBooks.map((book) => {
              return <RowCard key={book.etag} book={book} setClickedBook={setClickedBook} />;
          })} 
        </div>

        { 
        clickedBook? <ModalShowBookDetail clickedBook={clickedBook}/>
        : null
      }




    </>

  )
}

export default Row
