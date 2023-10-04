import React, { useState, useEffect } from "react";
import deleteIMG from "../../assets/delete.svg";
import editarIMG from "../../assets/editar.svg";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./ListarCartao.css";

export const ListarCartao = ({}) => {
    const [cartoes, setCartoes] = useState([]);

    useEffect(() => {
        const storedCartoes = JSON.parse(localStorage.getItem("cartoes")) || [];
        setCartoes(storedCartoes);
    }, []);

    const handleRemoverCartao = (index) => {
        const updateCartao = cartoes.filter((_, i) => i !== index);
        localStorage.setItem("cartoes", JSON.stringify(updateCartao));
        setCartoes(updateCartao);
    };

    return (
        <>
            <Navbar />
            <div className="ConteinerListarCartao">
                <div className="tituloListarCartao">
                    <h1>Listar Cartções</h1>
                    <div className="barraListarCartao"> </div>
                </div>

                <div className="DescricaoListarCartao">
                    <ul className="listarCartaoUl">
                        {cartoes.map((cartao, index) => (
                            <li key={index} className="listarCartaoLi">
                                <div className="descricaoListarCartao">
                                    <div className="listar-number">
                                        {cartao.number}
                                    </div>
                                    <div className="listar-expiry">
                                        {cartao.expiry}
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
                                                handleRemoverCartao(index)
                                            }
                                        />
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
