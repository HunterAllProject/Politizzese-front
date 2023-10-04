import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGLogin from "../../assets/politizzeseLogo.svg";
import ImgDesignLogin from "../../assets/cameraDesign.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Login = () => {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <NavbarLogin />

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
                                        required
                                        type="email"
                                        className="TextFieldLogin"
                                        id="filled-basic"
                                        label="Seu E-mail"
                                        variant="filled"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="inputsLogin">
                                    <TextField
                                        required
                                        type="password"
                                        className="TextFieldLogin"
                                        id="filled-basic"
                                        label="Sua Senha"
                                        variant="filled"
                                        value={senha}
                                        onChange={(e) =>
                                            setSenha(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="LoginRecSenha">
                                    <Link to="/recsenha">
                                        <p>Esqueceu a sua senha?</p>
                                    </Link>
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
            <Footer />
        </>
    );
};
