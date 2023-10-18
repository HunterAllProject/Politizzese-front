import React from "react";
import { Link } from "react-router-dom";
import "./CadastrarServico.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Upload } from "../../components/Upload/Upload.jsx";

export const CadastrarServico = () => {
  return (
    <div className="containerCadastrarServicoBudy">
      <Navbar />
      <div className="tituloGlobal">
        <h1>Cadastrar Serviços</h1>
        <div className="barraGlobal"></div>
      </div>

      <div className="containerCadastrarServico">
        <form className="cadastrarServicoForm">
          <div className="cadastrarVervicoSubTitulo">
            <h1>ENVIE SEU ARQUIVO</h1>
          </div>

          <div className="uploadCadastrarServico">
            <Upload />
            <h1>ARQUIVOS ENVIADOS</h1>
            <p>Nenhum arquivo enviado</p>
          </div>

          <div className="descricaoCadastrarServico">
            <p>
              O conteúdo enviado não poderá ultrapassar 2 GB;
              <br />
              Após o envio você deverá indicar o que você quer que façamos com
              seu conteúdo de arte, vídeo ou áudio;
            </p>
          </div>
          <div className="botaoCadastrarServicob">
            <Link to="/cadastrarservicoconcluido">
              <button type="submit">SALVAR</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
