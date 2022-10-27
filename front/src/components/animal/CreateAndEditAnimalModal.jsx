import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  createAnimal,
  getAnimals,
  updateAnimal,
} from "../../redux/actions/animals";
import { inputValidator } from "../../utils/utils";

function CreateAndEditAnimal({ show, setShow, id, setActive }) {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.data);
  const animal = animals?.find((item) => item._id === id);
  const [error, setError] = useState("");
  const [input, setInput] = useState(
    animal
      ? animal
      : {
          ID_SENASA: "",
          type: "",
          animal_weight: "",
          potrero_name: "",
          dispositive_type: "",
          dispositive_number: "",
        }
  );

  useEffect(() => {
    animal && setInput(animal);
  }, [id]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = async () => {
    setError(inputValidator(input));
    if (inputValidator(input) === "OK") {
      if (!animal) {
        await dispatch(createAnimal(input));
        setInput({
          ID_SENASA: "",
          type: "",
          animal_weight: "",
          potrero_name: "",
          dispositive_type: "",
          dispositive_number: "",
        });
        setError("");
        await dispatch(getAnimals());
        setTimeout(handleClose, 200);
      } else {
        await dispatch(updateAnimal(animal._id, input));
        await dispatch(getAnimals());
        setError("");
        setTimeout(handleClose, 200);
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{animal ? "Editar Animal" : "Nuevo Animal"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ margin: "5px" }}>
                <b>Id SENASA*</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Registro SENASA"
                onChange={handleChange}
                value={input.ID_SENASA}
                autoFocus
                maxLength="16"
                name="ID_SENASA"
                className={
                  error ===
                  "El campo Id SENASA debe tener 16 carácteres alfanuméricos."
                    ? "border border-danger"
                    : input.ID_SENASA.length > 0
                    ? "border border-success"
                    : null
                }
                style={{ marginBottom: "15px" }}
              />
              <Form.Label style={{ margin: "5px" }}>
                <b>Tipo Animal*</b>
              </Form.Label>
              <Form.Select
                name="type"
                onChange={handleChange}
                style={{ marginBottom: "15px" }}
                value={input.type}
                className={
                  error === "Debes seleccionar una opción en el Tipo Animal."
                    ? "border border-danger"
                    : input.type.length > 0
                    ? "border border-success"
                    : null
                }
              >
                <option>Seleccione una opción</option>
                <option value="novillo">Novillo</option>
                <option value="toro">Toro</option>
                <option value="vaquillona">Vaquillona</option>
              </Form.Select>
              <Form.Label style={{ margin: "5px" }}>
                <b>Peso</b>
              </Form.Label>
              <Form.Control
                type="number"
                name="animal_weight"
                placeholder="Peso del animal"
                max="10"
                onChange={handleChange}
                style={{ marginBottom: "15px" }}
                value={input.animal_weight}
              />
              <Form.Label style={{ margin: "5px" }}>
                <b>Nombre del Potrero*</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="potrero_name"
                placeholder="Nombre del potrero"
                maxLength="200"
                onChange={handleChange}
                style={{ marginBottom: "15px" }}
                value={input.potrero_name}
                className={
                  error === "El campo Nombre del Potrero no puede estar vacio."
                    ? "border border-danger"
                    : input.potrero_name.length > 0
                    ? "border border-success"
                    : null
                }
              />
              <Form.Label style={{ margin: "5px" }}>
                <b>Tipo de dispositivo*</b>
              </Form.Label>
              <Form.Select
                style={{ marginBottom: "15px" }}
                name="dispositive_type"
                onChange={handleChange}
                value={input.dispositive_type}
                className={
                  error ===
                  "Debes seleccionar una opción en el Tipo de dispositivo."
                    ? "border border-danger"
                    : input.dispositive_type.length > 0
                    ? "border border-success"
                    : null
                }
              >
                <option>Seleccione una opción</option>
                <option value="collar">Collar</option>
                <option value="caravana">Caravana</option>
              </Form.Select>
              <Form.Label style={{ margin: "5px" }}>
                <b>Número de dispositivo*</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="dispositive_number"
                maxLength="8"
                placeholder="Número de dispositivo"
                onChange={handleChange}
                style={{ marginBottom: "15px" }}
                value={input.dispositive_number}
                className={
                  error ===
                  "El campo Número de dispositivo debe tener 8 cáracteres alfanuméricos."
                    ? "border border-danger"
                    : input.dispositive_number.length > 0
                    ? "border border-success"
                    : null
                }
              />
            </Form.Group>
            {error === "OK" ? "" : <p style={{ color: "red" }}>{error} </p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              handleCreate();
              setActive(1);
            }}
          >
            {animal ? "Editar" : "Crear"}
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              handleClose();
              setError("");
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateAndEditAnimal;
