import React from "react";
import "./Credito.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import cifraoIMG from "../../assets/cifrao.svg";

export const Credito = () => {
    return (
        <div className="creditoContainerBudy">
            <Navbar />
            <div className="tituloGlobal">
                <h1>CRÉDITOS</h1>
                <div className="barraGlobal"> </div>
            </div>

            <div className="creditoContainer">
                <ul className="creditoUl">
                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h2>05</h2>
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

                        <Link to="/listarcartao">
                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                        </Link>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h2>10</h2>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>300</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <Link to="/listarcartao">
                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                        </Link>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h2>25</h2>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>750</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <Link to="/listarcartao">
                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                        </Link>
                    </li>

                    <li className="creditoLi">
                        <div className="creditoQtd">
                            <img src={cifraoIMG} alt="Cifrão" />
                            <h2>50</h2>
                        </div>

                        <div className="creditoValor">
                            <div className="creditoCifrao">
                                <h3>R$</h3>
                            </div>
                            <div className="creditoReais">
                                <h1>1500</h1>
                            </div>
                            <div className="creditoCifrao">
                                <h3>,00</h3>
                            </div>
                        </div>

                        <Link to="/listarcartao">
                        <div className="creditoComprar">
                            <button type="submit">Comprar</button>
                        </div>
                        </Link>
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
