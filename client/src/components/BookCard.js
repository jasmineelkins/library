import React from 'react'

function BookCard({book}) {

    const {title, description, pageCount}  = book.volumeInfo
    // const image = book.volumeInfo[0].imageLinks.thumbnail
    // imageLinks:{thumbnail}}
  return (
    <>
    <p>{title}</p>
    <p>{description}</p>
    <p>{pageCount}</p>
    {/* <p>{thumbnail}</p> */}
    </>
  )
}

export default BookCard
