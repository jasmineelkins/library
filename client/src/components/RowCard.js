import React from 'react'

function RowCard({book, setClickedBook }) {

    const {title, description, pageCount}  = book.volumeInfo

    function displayBookDetails () {
        setClickedBook(book)
      }

  return (
      <>
          <div className="bookCard">
            { book.volumeInfo.imageLinks === undefined ? <span>undefined image links</span>
            :<div className="bookImgContainer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={title} className="bookImg" onClick={displayBookDetails}/></div> }
          </div>
      
      </>

  )
}

export default RowCard