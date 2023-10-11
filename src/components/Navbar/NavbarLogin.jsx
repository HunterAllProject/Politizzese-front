import React from "react";
import { Link } from "react-router-dom";
import logoIMG from "../../assets/politizzeseLogo.svg";
import "./Navbar.css";

export const NavbarLogin = () => {
    return (
        <header className="header" id="header">
            <div className="NavHeader">
                <img
                    src={logoIMG}
                    alt="Imagem da logo"
                    className="logoHeader"
                />
            </div>
        </header>
    );
};
