import React from 'react'

function BookCard({book}) {

    const {title, description, pageCount}  = book.volumeInfo

    console.log("####### volumeInfo image links: ", book.volumeInfo.imageLinks)
  return (
    <>
    <p>{title}</p>
    <p>{description}</p>
    <p>{pageCount}</p>
    { book.volumeInfo.imageLinks === undefined
        ? <span>undefined image links</span>
        : <img src={book.volumeInfo.imageLinks.thumbnail}/> }

    </>
  )
}

export default BookCard
