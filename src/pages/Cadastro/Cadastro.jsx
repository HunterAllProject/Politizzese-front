import React, { useState } from "react";
import "./Cadastro.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGCadastro from "../../assets/politizzeseLogo.svg";
import ImgDesignCadastro from "../../assets/cameraDesign.svg";
import { NavbarLogin } from "../../components/Navbar/NavbarLogin.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        senha: "",
    });

    const handleFormCadastro = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value,
        });
    };

    const handleForm = async (event) => {
        try {
            event.preventDefault();
            // Caminho da api
            const response = await fetch(`/Usuario`, {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const json = await response.json();
            console.log(response.status);
            console.Console(json);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarLogin />
            <div className="sectionCadastro">
                <div className="Cadastro">
                    {/* <div className="imgFormCadastro">
                    <img src={ImgDesignCadastro} alt="" />
                </div> */}
                    <div className="LogoInputCadastro">
                        <div className="ImgLogoCadastro">
                            <img src={logoIMGCadastro} alt="logo do site" />
                        </div>

                        <form onSubmit={handleForm}>
                            <div className="formularioCadastro">
                                <div className="inputsCadastro">
                                    <TextField
                                        required
                                        type="name"
                                        className="TextFieldCadastro"
                                        id="filled-basic"
                                        label="Seu Name"
                                        variant="filled"
                                        value={formData.nome}
                                        onChange={(e) => {
                                            handleFormCadastro(e, "name");
                                        }}
                                    />
                                </div>

                                <div className="inputsCadastro">
                                    <TextField
                                        required
                                        type="email"
                                        className="TextFieldCadastro"
                                        id="filled-basic"
                                        label="Seu Email"
                                        variant="filled"
                                        value={formData.email}
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
                                        label="Uma Senha"
                                        variant="filled"
                                        value={formData.senha}
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
