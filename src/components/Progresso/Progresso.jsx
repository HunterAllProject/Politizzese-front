import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "./Progresso.css";

export const Progresso = () => {
  return (
    <div className="loading_overlay">
      <Stack
        sx={{ color: "#5a2f8b" }}
        spacing={5}
        direction="row"
        className="BarraDeProgesso"
      >
        <CircularProgress
          color="inherit"
          className="TamanhoBarrinhaProgresso"
        />
      </Stack>
    </div>
  );
};
