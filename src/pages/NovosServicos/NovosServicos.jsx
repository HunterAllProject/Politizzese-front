import React from "react";
import { Link } from "react-router-dom";
import arteIMG from "../../assets/arte.svg";
import audioIMG from "../../assets/audio.svg";
import videoIMG from "../../assets/video.svg";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./NovosServicos.css";

export const NovosServicos = () => {
  return (
    <>
      <Navbar />
      <div className="NovosServicosContainer">
        <div className="tituloGlobal">
          <h1>Serviços</h1>
          <div className="barraGlobal"> </div>
        </div>

        <div className="textoCard">
          <div className="textoNovosServicos">
            <p>
              Oferecemos três tipos de serviços: edição de artes, áudios e
              vídeos. Basta selecionar a opção desejada abaixo e enviar o seu
              arquivo conforme a descrição solicitada.
            </p>
          </div>

          <div className="cardNovosServicos">
            <div className="card">
              <div className="cardImg">
                <img src={arteIMG} alt="Imagem do card de artes" />
              </div>

              <div className="cardDescricao">
                <h2>Arte</h2>

                <div className="cardCreditos">
                  <p>01 CRÉDITOS</p>
                </div>

                <div className="cardEdicao">
                  <p>Edição de 01 arte</p>
                </div>

                <div className="cardSolicitar">
                  <Link to="/cadastrarServico">
                    <p>SOLICITAR ESTE SERVIÇO</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <img src={audioIMG} alt="Imagem do card de artes" />
              </div>

              <div className="cardDescricao">
                <h2>Áudio</h2>

                <div className="cardCreditos">
                  <p>01 CRÉDITOS</p>
                </div>

                <div className="cardEdicao">
                  <p>Edição de 01 arte</p>
                </div>

                <div className="cardSolicitar">
                  <Link to="/cadastrarServico">
                    <p>SOLICITAR ESTE SERVIÇO</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <img src={videoIMG} alt="Imagem do card de artes" />
              </div>

              <div className="cardDescricao">
                <h2>Vídeo</h2>

                <div className="cardCreditos">
                  <p>01 CRÉDITOS</p>
                </div>

                <div className="cardEdicao">
                  <p>Edição de 01 arte</p>
                </div>

                <div className="cardSolicitar">
                  <Link to="/cadastrarServico">
                    <p>SOLICITAR ESTE SERVIÇO</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
