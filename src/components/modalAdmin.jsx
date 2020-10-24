import React from "react";
import { Modal } from "react-bootstrap";
import "../css/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenuCreator } from "../redux/actions/menuAndCart";

const ModalSelect = ({ show, handleClose }) => {
  const { menuAndCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton />
        <Modal.Body className="modal-select-body">
          <button
            className="modal-select-btn btn"
            data-toggle="modal"
            data-target="#modal-edit"
            onClick={handleClose}
          >
            Edit
          </button>
          <button
            className="modal-select-btn btn"
            onClick={() => {
              dispatch(deleteMenuCreator(menuAndCart.dataEdit.id_menu));
              handleClose();
            }}
          >
            Delete
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSelect;
