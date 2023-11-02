import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Suporte.css";

export const Suporte = () => {
  return (
    <div className="containerSuporteBudy">
      <Navbar />

      <div className="tituloGlobal">
        <h1>SUPORTE</h1>
        <div className="barraGlobal"> </div>
      </div>

      <div className="containerSuporteMain">
        <div className="suporteLTDA">
          <h1>Politizze Soluções em Marketing LTDA</h1>
        </div>

        <div className="suporteCNPJ">
          <p>CNPJ 49.621.958/0001-99</p>
          <p>Todos os direitos reservados.</p>
        </div>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 0, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="suporteImputButton">
            <TextField
              id="outlined-multiline-static"
              label="Digite o seu e-mail"
              multiline
              rows={4}
            />

            <div className="suporteButton">
              <button type="subimit">ENVIAR EMAIL</button>
            </div>
          </div>
        </Box>
      </div>

      <Footer />
    </div>
  );
};
