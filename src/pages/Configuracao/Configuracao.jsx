import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Upload } from "../../components/Upload/Upload";
import "./Configuracao.css";

export const Configuracao = () => {
  
  return (
    <div className="ContainerConfigBudy">
      <Navbar />

      <div className="tituloGlobal1">
        <h1>CONFIGURAÇÃO & PRIVACIDADE</h1>
        <div className="barraGlobal1"></div>
      </div>

      <div className="containerConfigMain">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "60ch", color: "black" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="configFormDados">
            <h1>DADOS</h1>
            <TextField
              id="outlined-textarea"
              label="CPF"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />

            <TextField
              id="outlined-textarea"
              label="Nome"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />

            <TextField
              id="outlined-textarea"
              label="Nome fantasia ou de urna"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
          </div>

          <div className="configFormDados">
              <h1>CONTATO</h1>
              <TextField
              id="outlined-textarea"
              label="DDD  "
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
             <TextField
              id="outlined-textarea"
              label="Número"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
          </div>

          <div className="configFormDados">
              <h1>IMAGEM DO PERFIL</h1>
              <Upload />
          </div>

          <div className="configFormDados">
              <h1>ENDEREÇO</h1>
              <TextField
              id="outlined-textarea"
              label="Endereço  "
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
             <TextField
              id="outlined-textarea"
              label="Complemento"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
            <TextField
              id="outlined-textarea"
              label="CEP  "
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
             <TextField
              id="outlined-textarea"
              label="Cidade"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
            <TextField
              id="outlined-textarea"
              label="Estado UF"
              placeholder="Digite..."
              multiline
              type="text"
              className="configFormInput"
            />
          </div>

          <div className="botaoConfigDados">
          <button type="submit">
            <Link to="#">SALVAR</Link>
          </button>
        </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
};
