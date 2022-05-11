import React from 'react'

function ModalShowBookDetail({clickedBook}) {

    const {title, description, authors} = clickedBook.volumeInfo
    console.log(clickedBook.volumeInfo)

  return (
    <>
        <div className="modal2" >
            <div className="modal">
                <div className="descriptionContainer">
                    <h1 className="colorModalText">{title}</h1>
                    <p className="colorModalText">{description}</p>
                    <p className="colorModalText">{authors}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalShowBookDetail