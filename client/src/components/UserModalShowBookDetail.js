import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import QuickAddStatus from "./QuickAddStatus";

function UserModalShowBookDetail({ userClickedBook, closeUserModal }) {
  const { title, description, author, image } = userClickedBook;

  const [showMore, setShowMore] = useState(true);

  useEffect(() => {}, [showMore]);

  function updateStatus() {
    //   fetch PATCH to update book status
  }

  return (
    <>
      <div className="modal-background-mask" />
      <div className="modal">
        <div className="modalContent scroll">
          <div className="closeDiv">
            <AiFillCloseCircle
              onClick={closeUserModal}
              className="closeCircleSize"
            />
          </div>

          <div className="bookModalImgContainer">
            <img src={image} alt={title} className="bookImgModal" />
            <div className="bookModalInfo">
              <h1 className="modalTitle">{title}</h1>
              <h3 className="colorModalText"> Author: {author}</h3>
              <QuickAddStatus />
            </div>
          </div>

          <div className="descriptionModalContainer">
            <p className="descriptionText">
              {showMore ? `${description.substring(0, 500)}` : `${description}`}
            </p>
            <button
              className="showMoreButton"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "...Read More" : "Show Less"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserModalShowBookDetail;
