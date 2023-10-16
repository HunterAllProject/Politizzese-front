import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIMG from "../../assets/politizzeseLogo.svg";
import perfilIMG from "../../assets/imgPerfil.svg";
import extratoIMG from "../../assets/extrato.svg";
import creditoIMG from "../../assets/credito.svg";
import configIMG from "../../assets/config.svg";
import suporteIMG from "../../assets/suporte.svg";
import sairIMG from "../../assets/sair.svg";
import "./Navbar.css";

export const Navbar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <header className="header" id="header">
            <div className="NavHeader">
                <div className="NavMenuLogoHeader">
                    <Link to="/">
                        <img
                            src={logoIMG}
                            alt="Imagem da logo"
                            className="logoHeader"
                            id="logoHeader"
                        />
                    </Link>

                    <ul className="navListHeader">
                        <li>
                            <Link to="/">pedidos</Link>
                        </li>
                        <li>
                            <Link to="/novosservicos">Serviços</Link>
                        </li>
                        <li>
                            <Link to="/assinaturas">Assinaturas</Link>
                        </li>
                    </ul>
                </div>

                <img
                    src={perfilIMG}
                    alt="Imagem do perfil"
                    className="imgPerfilHeader"
                    onClick={toggleMenu}
                />

                <div
                    className={`subMenuWrap ${
                        isSubMenuOpen ? "open_menu" : ""
                    }`}
                    id="subMenu"
                >
                    <div className="subMenuHeader">
                        <div className="userInfoHeader">
                            <img src={perfilIMG} alt="Imagem do perfil" />
                            <h3>Fernanda Pessoa</h3>
                        </div>
                        <hr />

                        <Link to="#" className="subMenuLinkHeader">
                            <img src={extratoIMG} />
                            <p>Extrato</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src={creditoIMG} />
                            <p>Créditos</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src={configIMG} />
                            <p>Configurações & Privacidade</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src={suporteIMG} />
                            <p>Ajuda & Suporte</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src={sairIMG} />
                            <p>Sair</p>
                            <span>{">"}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
