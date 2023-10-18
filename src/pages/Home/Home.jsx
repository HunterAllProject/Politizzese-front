import React, { useContext, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./Home.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { useFetch } from "../../hooks/useFetch";

export const Home = ({ }) => {

  const auth = useContext(AuthContext);
  const { data } = useFetch('Credito/TotalCredito/' + auth.usuario.id);
  return (
    <div className="cardCreditoHomeBudy">
      <Navbar />
      <div className="cardCreditoHome">
        <div className="containerCreditoHome">
          <div className="creditosDisponiveisHome">
            {/* Lógica de créditos */}
            <h1 className="valorCreditosHome">{data}</h1>
            <p className="disponivelHome">Creditos Disponíveis</p>
          </div>

          <Link to="/credito">
            <div className="comprarCreditosHome">
              <p>Comprar Créditos</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="tituloGlobal">
        <h1>Pedidos</h1>
        <div className="barraGlobal"> </div>
      </div>

      <div className="botaoHome">
        <Link to="/novosservicos">
          <button type="submit">Adicionar Pedidos</button>
        </Link>
      </div>

      <Footer />
    </ div>
  );
};
