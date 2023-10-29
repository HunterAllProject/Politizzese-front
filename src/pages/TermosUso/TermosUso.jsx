import React from "react";
import "./TermosUso.css";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const TermosUso = () => {

    return (
        <div className="termoUsoBody">
            <Navbar />
            <div className="tituloGlobal">
                <h1>TERMOS DE USO</h1>
                <div className="barraGlobal"> </div>
            </div>

            <div className="termoUsoContainer">
            <h2>Termos e condições de uso do site</h2>

            <div className="termoUsoTexto">
                <p>Seja bem-vindo ao nosso site.</p>
                <p>Leia com atenção todos os termos abaixo.</p>
                <p>Este documento e todo o conteúdo do site são oferecidos
                pela <span>Pollitizesse Soluções em Marketing LTDA</span>, doravante
                referida como <span>"EMPRESA"</span>, que regula todos os direitos
                e obrigações de todos os que acessam o site, denominados
                neste documento como <span>"VISITANTE"</span>. Todos os direitos previstos
                na legislação são respeitados, e as cláusulas abaixo são 
                estabelecidas como requisitos para o acesso e visita ao site,
                localizado no endereço <span>pollitizesse.com.br</span>.
                </p>
            </div>
            </div>
            <Footer />
        </div>
    )
}



{/* <h1>Termos de Uso</h1>
<h2>Termos e condições uso do site</h2>
<p>Seja bem-vindo ao nosso site.</p>
<p>Leia com atenção todos os termos abaixo.</p>
<p>Este documento, e todo o conteúdo do site
   é oferecido pela Pollitizesse Soluções em Marketing LTDA,
   neste termo representado apenas por "EMPRESA", que regulamenta
   todos os direitos e orbigações com todos que acessam o site, denominado 
   neste termo "VISITANTE", reguardado todos os direitos previstos na legislação,
   trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado 
   no endereço pollitizesse.com.br.
</p> */}