import React from "react";
import deleteIMG from "../../assets/delete.svg";
import editarIMG from "../../assets/editar.svg";
import cartaoIMG from "../../assets/cartao.svg";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./ListarCartao.css";
import { useFetch } from "../../hooks/useFetch";

type Cartoes = {
    id: number,
    idUsuario: number,
    nome: string,
    numero: string,
    mes: string,
    ano: string,
    codigo: string
}

export const ListarCartao = ({}) => {
    const {data} = useFetch<Cartoes[]>('1');
    

    function handleRemoverCartao(id: number): void {
        console.log(id);

    }

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
                        {data?.map((cartao, index) => (
                            <li key={index} className="listarCartaoLi">
                                <div  className="containerDescListarCartao1">
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
                                            <p>Validade: {cartao.mes}/{cartao.ano}</p>
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
