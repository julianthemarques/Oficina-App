import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ErrorStatus({ error }) {
  return (
    <div className="erro">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="error">
          A aplicação apresentou o seguinte erro: {error}
        </Alert>
      </Stack>
    </div>
  );
}
