import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../redux/actions/animals";

const Paginate = ({ active, setActive }) => {
  const { meta } = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  let items = [];
  for (let number = 1; number <= meta?.page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={async () => {
          await dispatch(getAnimals(number));
          setActive(number);
        }}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Item
        onClick={async () => {
          await dispatch(getAnimals(active - 1));
          setActive(active - 1);
        }}
        disabled={active === 1}
      >
        {" "}
        {"<"}{" "}
      </Pagination.Item>
      {items}
      <Pagination.Item
        onClick={async () => {
          await dispatch(getAnimals(active + 1));
          setActive(active + 1);
        }}
        disabled={active === items.length}
      >
        {" "}
        {">"}{" "}
      </Pagination.Item>
    </Pagination>
  );
};

export default Paginate;
