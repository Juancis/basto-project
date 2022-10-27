import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAnimals } from "../../redux/actions/animals";
import Paginate from "../paginate/Paginate";
import Search from "../search/Search";
import AnimalList from "./AnimalList";
import CreateAndEditAnimal from "./CreateAndEditAnimalModal";

const Animal = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        margin: "0 1rem",
      }}
    >
      <div style={{ margin: 0 }}>
        <h1>Gestión de Animales</h1>
        <hr style={{ width: "21%", marginTop: 0 }} />
      </div>
      <div>
        <Button variant="success" onClick={() => setShow(true)}>
          + Nuevo Animal
        </Button>
        <CreateAndEditAnimal
          show={show}
          setShow={setShow}
          setActive={setActive}
        />
      </div>
      <div>
        <Search active={active} setActive={setActive} />
      </div>
      <div style={{ marginTop: 16 }}>
        <h4>Lista de Animales</h4>
        <AnimalList setActive={setActive} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Paginate active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default Animal;
