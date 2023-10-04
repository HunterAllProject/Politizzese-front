import { Link } from "react-router-dom";
import React from "react";
import logoIMG from "../../assets/politizzeseLogo.svg";
import perfilIMG from "../../assets/imgPerfil.svg";
import "./Navbar.css";

export const NavbarLogin = () => {
    return (
        <header className="header" id="header">
            <div className="imgLogoHeader">
                <img src={logoIMG} alt="Imagem da logo" />
            </div>
        </header>
    );
};
