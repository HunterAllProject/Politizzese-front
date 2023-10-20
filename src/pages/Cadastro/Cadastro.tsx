import React, { useState } from "react";
import "./Cadastro.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGCadastro from "../../assets/politizzeseLogo.svg";
import ImgDesignCadastro from "../../assets/cameraDesign.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Usuario } from "../../types/Usuario";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const [formUsuario, setFormUsuario] = useState({
        nomeCompleto: "",
        email: "",
        senha: "",
    });

    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const handleFormCadastro = (event, name) => {
        setFormUsuario({
            ...formUsuario,
            [name]: event.target.value,
        });
    };

    const handleForm = async (event) => {
        try {
            event.preventDefault();
            await auth.cadastro(formUsuario)
            navigate('../login')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarLogin />
            <div className="sectionCadastro">
                <div className="Cadastro">
                    <div className="LogoInputCadastro">
                        <div className="ImgLogoCadastro">
                            <img src={logoIMGCadastro} alt="logo do site" />
                        </div>

                        <form onSubmit={handleForm}>
                            <div className="formularioCadastro">
                                <div className="inputsCadastro">
                                    <TextField
                                        required
                                        type="nomeCompleto"
                                        className="TextFieldCadastro"
                                        id="filled-basic"
                                        label="Nome completo"
                                        variant="filled"
                                        value={formUsuario.nomeCompleto}
                                        onChange={(e) => {
                                            handleFormCadastro(e, "nomeCompleto");
                                        }}
                                    />
                                </div>

                                <div className="inputsCadastro">
                                    <TextField
                                        required
                                        type="email"
                                        className="TextFieldCadastro"
                                        id="filled-basic"
                                        label="E-mail"
                                        variant="filled"
                                        value={formUsuario.email}
                                        onChange={(e) => {
                                            handleFormCadastro(e, "email");
                                        }}
                                    />
                                </div>

                                <div className="inputsCadastro">
                                    <TextField
                                        required
                                        type="password"
                                        className="TextFieldCadastro"
                                        id="filled-basic"
                                        label="Senha"
                                        variant="filled"
                                        value={formUsuario.senha}
                                        onChange={(e) => {
                                            handleFormCadastro(e, "senha");
                                        }}
                                    />
                                </div>
                            </div>

                            <button type="submit">Criar Conta</button>
                        </form>
                        <p>
                            Já é cadastrado?
                            <Link to="/login"> Fazer Login! </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};