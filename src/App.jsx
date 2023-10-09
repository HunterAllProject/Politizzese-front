import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { RecSenha } from "./pages/RecSenha/RecSenha.jsx";
import { AddCartao } from "./pages/AddCartao/AddCartao.jsx";
import { ListarCartao } from "./pages/ListarCartao/ListarCartao.tsx";
import { NovosServicos } from "./pages/NovosServicos/NovosServicos.jsx";
<<<<<<< Updated upstream
import {Assinaturas} from './pages/Assinaturas/Assinaturas.jsx';
=======
import { Assinaturas } from "./pages/Assinaturas/Assinaturas.jsx";
import { Extrato } from "./pages/Extrato/Extrato.jsx";
>>>>>>> Stashed changes

export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
                    <Route path="/login" element={<Login />} />
>>>>>>> Stashed changes
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recsenha" element={<RecSenha />} />
                    <Route path="/addcartao" element={<AddCartao />} />
                    <Route path="/listarcartao" element={<ListarCartao />} />
                    <Route path="/novosservicos" element={<NovosServicos />} />
                    <Route path="/assinaturas" element={<Assinaturas />} />
<<<<<<< Updated upstream
=======
                    <Route path="/extrato" element={<Extrato />} />
>>>>>>> Stashed changes
                </Routes>
            </Router>
        </>
    );
};
