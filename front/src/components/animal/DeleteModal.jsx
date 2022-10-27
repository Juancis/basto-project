import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnimal } from "../../redux/actions/animals";

function DeleteModal({ showDelete, setShowDelete, id }) {
  const handleClose = () => setShowDelete(false);
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.data);
  const animal = animals?.find((item) => item._id === id);

  const handleDelete = (id) => {
    dispatch(deleteAnimal(id));
    handleClose();
  };

  return (
    <>
      <Modal show={showDelete} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Estás seguro de realizar esta acción? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Estás por eliminar a ID_SENASA: <b>{animal?.ID_SENASA}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete(animal._id)}>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
