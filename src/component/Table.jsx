import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import ErrorStatus from "./error/ErrorStatus";

/// Essa constante vem do Material UI, ela é responsável por definir a estilização do nosso modal.

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

  /// Utilizando useEffect para que a aplicação não realize várias APIs, com este hook podemos utilizar os métodos do fetch apenas 1 vez, o que ajuda em evitar valores repetidos para a nossa tabela.
  useEffect(() => {
    /// Abaixo utilizaremos propriedades do Material UI para a criação das colunas, iremos definir os 3 campos solicitados pelo exercício e definir a largura da coluna.
    setColumns([
      { field: "customer", headerName: "Nome do cliente", width: 180 },
      { field: "value", headerName: "Valor", width: 120 },
      { field: "seller", headerName: "Nome do vendedor", width: 180 },
    ]);
    /// A função fetch é responsável por buscar a API na qual iremos utilizar seus valores para inseri-los posteriormente em nossa tabela
    fetch("https://my-json-server.typicode.com/codificar/oficina/proposals")
      .then((res) => {
        const { status } = res;
        setError(status === 404 || status === 502 ? `${status}` : null);
        return res.json();
      })
      .then((data) => {
        // Abaixo foi utilizado uma função de map, e as chaves servem para desestruturar o Json obtido no fetch, filtramos então os objetos que queremos obter para apresenta-los no display da tela.

        data.map(({ seller, customer, value, id, description }) => {
          const filterRow = {
            seller,
            customer,
            value,
            id,
            description,
          };
          return setRows((old) => [...old, filterRow]);
          /// utilizamos a concatenação do Estado inicial da useState que é nulo, mais a nossa lista denominada filterRow, repare que a função map irá rodar várias vezes, e o parâmetro old se torna a concatenação realizada no primeiro setRow
        });
      });
  }, []);

  return (
    <>
      {/*foi criado uma condição no qual, caso seja encontrado o como valor de erro, a resposta do servidor 404 ou 502, iremos inserir a mensagem de erro, caso contrário continuaremos com o estado de nulo, definido no nosso useState error.*/}
      {error === "404" || error === "502" ? (
        <ErrorStatus error={error} />
      ) : null}
      <div className="Container-Data">
        {/*aqui temos o DataGrid, um componente estilizado pelo Material UI, sua utilização se baseia na criação de colunas e linhas, além de customizar as células dentro desta tabela.*/}
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
          {/*O modal é uma tela no qual irá demonstrar uma mensagem por cima da
          aplicação, para abri-lo basta clicar em uma célula da tabela*/}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/*Box é a caixa do modal no qual iremos inserior a descrição
            retirada da API*/}
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
