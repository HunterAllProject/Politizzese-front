import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Extrato.css";

export const Extrato = () => {
    return (
        <div>
            <Navbar />
            <div className="tituloHome">
                <h1>Extrato</h1>
                <div className="barraHome"> </div>
            </div>

            <div className="containerExtrato">
                <ul className="extratoUl">
                    <li className="extratLi">
                        <div className="extratoCredito">
                            <p>+2 Créditos</p>
                        </div>

                        <div className="extratoDate">
                            <h1>
                                Compra de créditos:&nbsp;{" "}
                                <span> em 25/09/2023 às 16:07</span>
                            </h1>
                        </div>
                    </li>

                    <li className="extratLi">
                        <div className="extratoCredito">
                            <p>-2 Créditos</p>
                        </div>

                        <div className="extratoDate">
                            <h1>
                                Compra de serviços:&nbsp;{" "}
                                <span> em 25/09/2023 às 16:07</span>
                            </h1>
                        </div>
                    </li>

                    <li className="extratLi">
                        <div className="extratoCredito">
                            <p>+2 Créditos</p>
                        </div>

                        <div className="extratoDate">
                            <h1>
                                Compra de créditos:&nbsp;{" "}
                                <span> em 25/09/2023 às 16:07</span>
                            </h1>
                        </div>
                    </li>

                    <li className="extratLi">
                        <div className="extratoCredito">
                            <p>-2 Créditos</p>
                        </div>

                        <div className="extratoDate">
                            <h1>
                                Compra de serviços:&nbsp;{" "}
                                <span> em 25/09/2023 às 16:07</span>
                            </h1>
                        </div>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
};
