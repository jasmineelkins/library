import React from 'react'

function RowCard({book}) {

    const {title, description, pageCount}  = book.volumeInfo

  return (
      <>
          <div className="bookCard">
            { book.volumeInfo.imageLinks === undefined ? <span>undefined image links</span>
            :<div className="bookImgContainer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={title} className="bookImg"/></div> }
    </div>
      
      </>

  )
}

export default RowCard