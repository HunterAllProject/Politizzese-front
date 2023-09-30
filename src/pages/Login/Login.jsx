import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGLogin from "../../assets/politizzeseLogo.svg";
import ImgDesignLogin from "../../assets/cameraDesign.svg";

export const Login = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="sectionLogin">
            <div className="login">
                {/* <div className="imgFormLogin">
                    <img src={ImgDesignLogin} alt="" />
                </div> */}
                <div className="LogoInputLogin">
                    <div className="ImgLogoLogin">
                        <img src={logoIMGLogin} alt="logo do site" />
                    </div>

                    <form>
                        <div className="formularioLogin">
                            <div className="inputsLogin">
                                <TextField
                                    className="TextFieldLogin"
                                    id="filled-basic"
                                    label="Seu Name"
                                    variant="filled"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="inputsLogin">
                                <TextField
                                    className="TextFieldLogin"
                                    id="filled-basic"
                                    label="Seu Email"
                                    variant="filled"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit">Entrar</button>
                    </form>
                    <p>
                        Ainda não tem conta?
                        <Link to="/cadastro"> Criar Conta</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
