import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function Table() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    setColumns([
      { field: "customer", headerName: "Nome do cliente", width: 180 },
      { field: "value", headerName: "Valor", width: 120 },
      { field: "seller", headerName: "Nome do vendedor", width: 180 },
    ]);
    fetch("https://my-json-server.typicode.com/codificar/oficina/proposals")
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line array-callback-return
        data.map(({ seller, customer, value, id }) => {
          const filterRow = {
            seller,
            customer,
            value,
            id,
          };
          setRows((old) => [...old, filterRow]);
        });
        console.log(data);
      });
  }, []);

  return (
    <div className="Container-Data">
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default Table;
