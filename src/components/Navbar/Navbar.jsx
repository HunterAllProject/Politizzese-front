import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIMG from "../../assets/politizzeseLogo.svg";
import perfilIMG from "../../assets/imgPerfil.svg";
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
                            <img src="#" />
                            <p>Extrato</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src="#" />
                            <p>Créditos</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src="#" />
                            <p>Configurações & Privacidade</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src="#" />
                            <p>Ajuda & Suporte</p>
                            <span>{">"}</span>
                        </Link>

                        <Link to="#" className="subMenuLinkHeader">
                            <img src="#" />
                            <p>Sair</p>
                            <span>{">"}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
