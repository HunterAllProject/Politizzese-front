import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import logoIMGLogin from "../../assets/politizzeseLogo.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { AuthContext } from "../../context/auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Progresso } from "../../components/Progresso/Progresso.jsx"

export const Login = () => {
    const auth = useContext(AuthContext);
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const [showLoading, setShowLoading] = useState(false);

    const handleSubimit = (e) => {
        e.preventDefault();
    }

    const login = async () => {

        if (email && senha) {
            setShowLoading(true);
            const logado = await auth.login(email, senha);
            if (logado) {
                navigate('/');
                setShowLoading(true);
            }
            else {
                alert("Usuario não existe")
                setShowLoading(false);
            }
        }
    }

    return (
        <>
            <NavbarLogin />

            <div className="sectionLogin">
                <div className="login">
                    <div className="LogoInputLogin">
                        <div className="ImgLogoLogin">
                            <img src={logoIMGLogin} alt="logo do site" />
                        </div>

                        <form className="formularioLogin" onSubmit={handleSubimit}>
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

                            <button onClick={login} type="submit">Entrar</button>
                        </form>

                        <p>
                            Ainda não tem conta?
                            <Link to="/cadastro"> Criar Conta</Link>
                        </p>
                    </div>
                    { showLoading && <Progresso /> }
                </div>
            </div>
            <Footer />
        </>
    );
};
