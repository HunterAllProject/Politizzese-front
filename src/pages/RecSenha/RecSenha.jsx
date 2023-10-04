import React, { useState } from "react";
import "./RecSenha.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGRecSenha from "../../assets/politizzeseLogo.svg";
import ImgDesignRecSenha from "../../assets/cameraDesign.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const RecSenha = () => {
    const [email, setEmail] = useState("");

    return (
        <>
         <NavbarLogin />
            <div className="sectionRecSenha">
                <div className="RecSenha">
                    {/* <div className="imgFormRecSenha">
                    <img src={ImgDesignRecSenha} alt="" />
                </div> */}
                    <div className="LogoInputRecSenha">
                        <div className="ImgLogoRecSenha">
                            <img src={logoIMGRecSenha} alt="logo do site" />
                        </div>

                        <form>
                            <div className="formularioRecSenha">
                                <div className="inputsRecSenha">
                                    <TextField
                                        required
                                        type="email"
                                        className="TextFieldRecSenha"
                                        id="filled-basic"
                                        label="Informe o seu e-mail de cadastro"
                                        variant="filled"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                        <p>
                            Deseja voltar ao Login?
                            <Link to="/login"> Fazer Login!</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
