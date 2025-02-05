import React from "react";
import "./Modal.css";

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-wrap" onClick={onCancel} >
      <div className="modal">
        <p>삭제하시겠습니까?</p>
          <button onClick={onConfirm} className="button confirm-button">
            예
          </button>
          <button onClick={onCancel} className="button cancel-button">
            아니요
          </button>
      </div>
    </div>
  );
};

export default Modal;
