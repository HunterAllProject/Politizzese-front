import { Link } from "react-router-dom";
import React from "react";
import logoIMG from "../../assets/politizzeseLogo.svg";
import perfilIMG from "../../assets/imgPerfil.svg";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="header" id="header">
            <div className="imgLogoHeader">
                <img src={logoIMG} alt="Imagem da logo" />

                 <ul>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/pedidos">pedidos</Link>
                    </li>
                    <li>
                        <Link to="/assinatiras">Assinaturas</Link>
                    </li>
                </ul>
            </div>

            <div className="imgPerfilHeader">
                <img src={perfilIMG} alt="Imagem do perfil" /> 
            </div>
        </header>
    );
};
