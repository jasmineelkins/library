import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function ModalShowBookDetail({ clickedBook, closeModal, user }) {
  const { title, description, authors, publisher } = clickedBook.volumeInfo;

  const [showMore, setShowMore] = useState(true);

  useEffect(() => {}, [showMore]);

  return (
    <>
      <div className="modal-background-mask" />
      <div className="modal">
        <div className="modalContent scroll">
          <div className="closeDiv">
            <AiFillCloseCircle
              onClick={closeModal}
              className="closeCircleSize"
            />
          </div>
          {clickedBook.volumeInfo.imageLinks === undefined ? (
            <span>undefined image links</span>
          ) : (
            <div className="bookModalImgContainer">
              <img
                src={clickedBook.volumeInfo.imageLinks.thumbnail}
                alt={title}
                className="bookImgModal"
              />
              <div className="bookModalInfo">
                <h1 className="modalTitle">{title}</h1>
                <h3 className="colorModalText"> Author: {authors}</h3>
                <p className="colorModalText"> Publisher: {publisher}</p>
                {user ? <button>Add to collection</button> : null}
              </div>
            </div>
          )}
          <div className="descriptionModalContainer">
            <p className="descriptionText">
              {showMore
                ? `${description.substring(0, 500)}...`
                : `${description}`}
            </p>
            <button
              className="showMoreButton"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read More" : "Show Less"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalShowBookDetail;
