import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import CreateAndEditAnimal from "./CreateAndEditAnimalModal";
import DeleteModal from "./DeleteModal";

function Table({ columns, data = [] }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      <table style={{ width: "100%" }} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "transparent",
                borderTop: "2px solid grey",
                textAlign: "center",
              }}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                style={{
                  height: "60px",
                  borderBottom: "2px solid grey",
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{
                        textAlign: "center",
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const AnimalList = ({ setActive }) => {
  const animals = useSelector((state) => state.animals.data);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID SENASA",
        accessor: "ID_SENASA",
      },
      {
        Header: "Tipo de Animal",
        accessor: "type",
      },
      {
        Header: "Peso (KG)",
        accessor: "animal_weight",
      },
      ,
      {
        Header: "Nombre del Potrero",
        accessor: "potrero_name",
      },
      {
        Header: "Numero de dispositivo",
        accessor: "dispositive_number",
      },
      {
        Header: "Tipo de dispositivo",
        accessor: "dispositive_type",
      },
      {
        Header: "Fecha de creación",
        accessor: "creation_date",
      },
      {
        Header: "Fecha de modificación",
        accessor: "modification_date",
      },
      {
        Header: "Acciones",
        accessor: "_id",
        Cell: ({ value }) => {
          return <EditAndDelete id={value} setActive={setActive} />;
        },
      },
    ],
    []
  );

  const EditAndDelete = ({ id, setActive }) => {
    const [selectedId, setSelectedId] = useState("");
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
      <>
        <div
          style={{
            fontSize: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() => {
              setShow(true);
              setSelectedId(id);
            }}
            value="edit"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <BiEdit style={{ color: "green" }} />{" "}
          </button>
          <button
            onClick={() => {
              setShowDelete(true);
              setSelectedId(id);
            }}
            value="delete"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <RiDeleteBin6Line style={{ color: "red" }} />
          </button>
        </div>
        <DeleteModal
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          id={selectedId}
        />
        <CreateAndEditAnimal
          show={show}
          setShow={setShow}
          id={selectedId}
          setActive={setActive}
        />
      </>
    );
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Table columns={columns} data={animals} />
    </div>
  );
};

export default AnimalList;
