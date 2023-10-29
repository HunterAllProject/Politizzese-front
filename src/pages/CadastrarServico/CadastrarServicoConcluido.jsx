import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./CadastrarServicoConcluido.css";

export const CadastrarServicoConcluido = () => {
  return (
    <div className="containerCadastrarServicoConcluidoBudy">
      <Navbar />
      <div className="tituloGlobal">
        <h1>CADASTRAR SERVIÇOS</h1>
        <div className="barraGlobal"></div>
      </div>

      <div className="containerCadastrarServicoConcluido">
        <form className="cadastrarServicoFormConcluido">
          <div className="cadastrarVervicoSubTituloConcluido">
            <h1>DESCRIÇÃO DO SERVIÇO</h1>
          </div>

          <div className="descricaoCadastrarServicoConcluido">
            <p>
              Descreva brevemente o serviço que você deseja, para que nossos
              editores possam realizar o seu serviço.
            </p>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, color: "black" },
              }}
              noValidate
              autoComplete="off"
              className="inputFormCadastrarServico"
            >
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Descreva o serviço"
                  placeholder="Descrição"
                  multiline
                  type="text"
                  required
                />
              </div>
            </Box>
          </div>

          <div className="cadastrarVervicoSubTituloConcluido">
            <h1>NOME DO SERVIÇO</h1>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, color: "black" },
              }}
              noValidate
              autoComplete="off"
              className="inputFormCadastrarServico"
            >
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Nome do serviço"
                  placeholder="Nome do serviço"
                  multiline
                />
              </div>
            </Box>
          </div>

          <div className="botaoCadastrarServicob">
            <Link to="/">
              <button type="submit">PEDIDO CONCLUÍDO</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
