import React, { useState } from "react";
import deleteIMG from "../../assets/delete.svg";
import editarIMG from "../../assets/editar.svg";
import cartaoIMG from "../../assets/cartao.svg";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./ListarCartao.css";
import { useFetch } from "../../hooks/useFetch";
import { Cartao } from "../../types/Cartao";
import { AuthContext } from "../../context/auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



export const ListarCartao = ({ }) => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const credito = auth.credito;
    if (credito == 0) {
        navigate("../credito");
    }
    const { data } = useFetch<Cartao[]>(String(auth.usuario!.id));
    function handleRemoverCartao(id: number): void {
        console.log(id);
    }

    function selecionar(id: number): void {
        console.log(id);
    }

    return (
        <>
            <Navbar />
            <div className="ConteinerListarCartao">
                <div className="tituloGlobal">
                    <h1>Listar Cartões</h1>
                    <div className="barraGlobal"> </div>
                </div>

                <div className="DescricaoListarCartao">
                    <ul className="listarCartaoUl">
                        {data?.map((cartao, index) => (

                            <li key={index} onClick={()=>
                                selecionar(cartao.id)
                                
                            } className="listarCartaoLi">
                                <div className="containerDescListarCartao1">
                                    <img src={cartaoIMG} alt="" />
                                </div>

                                <div className="containerDescListarCartao">
                                    <div className="descListarCartao">
                                        <div className="titulo-cartão">
                                            <h1>Cartão cadastrado</h1>
                                        </div>

                                        <div className="listar-number">
                                            <p>{cartao.numero}</p>
                                        </div>

                                        <div className="listar-expiry">
                                            <p>Validade: {cartao.expiracao}</p>
                                        </div>
                                    </div>

                                    <div className="cartaoEditarExcluir">
                                        <div className="cartaoEditarListar">
                                            <Link to={`/edit/${index}`}>
                                                <img
                                                    src={editarIMG}
                                                    alt="Imagem da ferramenta de editar"
                                                />
                                            </Link>
                                        </div>

                                        <div className="cartaoExcluirListar">
                                            <img
                                                src={deleteIMG}
                                                alt="Imagem da lixeira"
                                                onClick={() =>
                                                    handleRemoverCartao(cartao.id)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="AdicionarListarCartao">
                        <Link to="/addcartao">Adicionar Cartão</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
