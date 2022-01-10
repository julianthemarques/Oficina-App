import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import ErrorStatus from "./error/ErrorStatus";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Table() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setColumns([
      { field: "customer", headerName: "Nome do cliente", width: 180 },
      { field: "value", headerName: "Valor", width: 120 },
      { field: "seller", headerName: "Nome do vendedor", width: 180 },
    ]);
    fetch("https://my-json-server.typicode.com/codificar/oficina/proposals")
      .then((res) => {
        const { status } = res;
        setError(status === 404 || status === 502 ? `${status}` : null);
        return res.json();
      })
      .then((data) => {
        // eslint-disable-next-line array-callback-return
        data.map(({ seller, customer, value, id, description }) => {
          const filterRow = {
            seller,
            customer,
            value,
            id,
            description,
          };
          setRows((old) => [...old, filterRow]);
        });
      });
  }, []);

  return (
    <>
      {error === "404" || error === "502" ? (
        <ErrorStatus error={error} />
      ) : null}
      <div className="Container-Data">
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellClick={({ row }) => {
            setDescription(row.description);
            handleOpen();
          }}
        />
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Descrição
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {description}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Table;
