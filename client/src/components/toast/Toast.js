import React, { useState, useEffect } from "react";
import "./Toast.css";

function Toast({ toastList, position, selectedStatus }) {
  // const [list, setList] = useState([toastList]);
  const [toastMessage, settoastMessage] = useState("");

  useEffect(() => {
    settoastMessage(selectedStatus);
  }, [toastMessage, settoastMessage]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        <div className={`notification toast ${position}`}>
          <div>{toastMessage}</div>
        </div>

        {/* <div key={i} className={`notification toast ${position}`}>
            <button>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Toast;
