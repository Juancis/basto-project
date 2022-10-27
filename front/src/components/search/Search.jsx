import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { getAnimal, getAnimals } from "../../redux/actions/animals";

const Search = ({ setActive }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.length === 0) {
      return setError("El campo se encuentra vacio.");
    }
    dispatch(getAnimal(input));
    setInput("");
    setError("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
      }}
    >
      <Form
        style={{
          marginTop: 10,
          width: "70%",
        }}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label style={{ margin: 0 }}>
            <h4>ID Senasa Animal</h4>
          </Form.Label>
          {error ? (
            <span style={{ display: "flex", color: "red" }}>{error}</span>
          ) : null}
          <Form.Control
            type="text"
            name="search"
            value={input}
            placeholder="Buscar Id Senasa"
            className={
              error === "El campo se encuentra vacio."
                ? "border border-danger"
                : null
            }
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        <Button onClick={handleClick}>Buscar</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        <Button
          onClick={async () => {
            await dispatch(getAnimals());
            setActive(1);
            setError("");
          }}
        >
          Todos
        </Button>
      </div>
    </div>
  );
};

export default Search;
