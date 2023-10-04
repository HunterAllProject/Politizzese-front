import React from "react";
import { Link } from "react-router-dom";

import './Assinaturas.css';

export const Assinaturas = () => {
 return (
  <div className="assinaturasContainer">
   <div className="tituloAssinaturas">
    <h1>Assinaturas</h1>
    <div className="barraAssinaturas"> </div>
   </div>
   <div className="container_ass">
    <div className="container_titulo_ass">
     <h1>plano</h1>
    </div>
    <div className="container_conteudo_ass1">
     <h3>assinatura mensal</h3>
     <div className="sessoes_ass1">
      <section className="section1">
       <h4>por apenas</h4>
       <h1>69,90</h1>
       <p>R$</p>
       <h5>por mês</h5>
      </section>
      <section className="section2">
       <h1>=</h1>
      </section>
      <section className="section3">
       <h4>você terá</h4>
       <h1>02</h1>
       <p className="p_estilizado">
        CRÉDITOS
       </p>
      </section>
     </div>

    </div>

    <div className="sessoes_ass2">
     <section className="section1_descricao">
      <h3>Como funciona?</h3>
      <p>O cliente terá 02 créditos </p>
      <p>para uso acumulativo.</p>
     </section>

     <section className="section2_descricao"></section>

     <section className="section3_descricao">

      <div className="linha1_ass">
       <p>Edição de vídeo</p>
       <p>=</p>
       <h5>02 créditos</h5>
      </div>

      <div className="linha2_ass">
       <p>Arte Design</p>
       <p>=</p>
       <h5>02 créditos</h5>
      </div>

      <div className="linha3_ass">

       <p>Áudio</p>
       <p>=</p>
       <h5>02 créditos</h5>

      </div>
     </section>
    </div>

   </div>

   <div className="botao_assinaturas">

    <button type="submit">
     <Link to= '/listarcartao' >ASSINAR PLANO MENSAL</Link>
    </button>

   </div>


  </div>
 );
};
