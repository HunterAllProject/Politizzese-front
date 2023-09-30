import React, { useState } from "react";
import "./Cadastro.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMGCadastro from "../../assets/politizzeseLogo.svg";
import ImgDesignCadastro from "../../assets/cameraDesign.svg";

export const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="sectionCadastro">
            <div className="Cadastro">
                {/* <div className="imgFormCadastro">
                    <img src={ImgDesignCadastro} alt="" />
                </div> */}
                <div className="LogoInputCadastro">
                    <div className="ImgLogoCadastro">
                        <img src={logoIMGCadastro} alt="logo do site" />
                    </div>

                    <form>
                        <div className="formularioCadastro">
                            <div className="inputsCadastro">
                                <TextField
                                    required
                                    type="name"
                                    className="TextFieldCadastro"
                                    id="filled-basic"
                                    label="Seu Name"
                                    variant="filled"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
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
    );
};
