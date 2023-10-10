import React from "react";
import "./Credito.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import cifraoIMG from "../../assets/cifrao.svg";

export const Credito = () => {
    return (
        <div>
            <Navbar />
            <div className="tituloHome">
                <h1>Créditos</h1>
                <div className="barraHome"> </div>
            </div>

            <div className="creditoContainer">
                <ul className="creditoUl">
                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h1>05</h1>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>175</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h1>05</h1>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>175</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h1>05</h1>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>175</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h1>05</h1>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>175</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                    </li>
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
