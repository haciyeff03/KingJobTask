import React from "react";
import "./modalpart.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>Welcome!</span>
          <button className="close-button_one" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="up">
            <h2>This is Window!</h2>
          </div>
          <div className="down">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-button_two" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
