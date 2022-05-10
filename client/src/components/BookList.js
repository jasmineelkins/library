import React from 'react'
import BookCard from './BookCard'

function BookList({bookListObj}) {
    let booksToDisplay;

    if (bookListObj && bookListObj !== {}) {
         booksToDisplay = bookListObj.map(book => {
            return <BookCard 
                key={book.etag}
                book={book}
            />
        })
    }


  return (
      <>
      <h2>My Books</h2>
        <div className="bookCollection">{booksToDisplay}
        </div>
        
      </>


  )
}

export default BookList