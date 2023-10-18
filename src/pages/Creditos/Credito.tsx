import React, { useState } from "react";
import "./Credito.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import cifraoIMG from "../../assets/cifrao.svg";
import { Creditos } from "../../types/Creditos"
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

export const Credito = () => {
    const { data } = useFetch<Creditos[]>('Credito');
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    function handleComprar(id: number): void {
        auth.guardarCredito(id);
        navigate('../ListarCartao')
    }

    return (
        <div>
            <Navbar />
            <div className="tituloHome">
                <h1>Créditos</h1>
                <div className="barraHome"> </div>
            </div>

            <div className="creditoContainer">

                <ul className="creditoUl">

                    {data?.map((c, index) => (

                        <li className="creditoLi">
                            <div className="creditoQtd">
                                <img src={cifraoIMG} alt="Cifrão" />
                                <h2>{c.numero}</h2>
                            </div>

                            <div className="creditoValor">
                                <div className="creditoCifrao">
                                    <h3>R$</h3>
                                </div>
                                <div className="creditoReais">
                                    <h1>{c.valor}</h1>
                                </div>
                                <div className="creditoCifrao">
                                </div>
                            </div>

                            <div className="creditoComprar">
                                <button onClick={() =>
                                    handleComprar(c.id)
                                }
                                    type="submit">Comprar</button>
                            </div>
                        </li>
                    ))};

                </ul>

                <div className="creditoInformativo">
                    <p>
                        Para parcelamento, verificar disponibilidade no momento
                        da compra.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};
