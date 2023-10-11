import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import logoIMGLogin from "../../assets/politizzeseLogo.svg";
import ImgDesignLogin from "../../assets/cameraDesign.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { AuthContext } from "../../context/auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        if (email && senha) {
            const logado = await auth.login(email, senha);
            if (logado) {
                navigate('/');
            }
            else {
                alert("Usuario não existe")
            }
        }
    }

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

                        <button onClick={login} type="submit">Entrar</button>

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
