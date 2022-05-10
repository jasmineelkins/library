import React from 'react'

function BookCard({book}) {

    const {title, description, pageCount}  = book.volumeInfo

    console.log("####### volumeInfo image links: ", book.volumeInfo.imageLinks)
  return (
    <>
    {/* <p>{title}</p>
    <p>{description}</p>
    <p>{pageCount}</p> */}

    <div className="bookCard">
    { book.volumeInfo.imageLinks === undefined
        ? <span>undefined image links</span>
        : <div className="bookImgContainer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={title} className="bookImg"/></div>}
    </div>
    </>
  )
}

export default BookCard
