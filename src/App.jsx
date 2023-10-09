import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { RecSenha } from "./pages/RecSenha/RecSenha.jsx";
import { AddCartao } from "./pages/AddCartao/AddCartao.jsx";
import { ListarCartao } from "./pages/ListarCartao/ListarCartao.tsx";
import { NovosServicos } from "./pages/NovosServicos/NovosServicos.jsx";
import { Assinaturas } from './pages/Assinaturas/Assinaturas.jsx';

export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/recsenha" element={<RecSenha />} />
                    
                        <Route path="/" element={ <Home />} />
                        <Route path="/addcartao" element={<AddCartao />} />
                        <Route path="/listarcartao" element={<ListarCartao />} />
                        <Route path="/novosservicos" element={<NovosServicos />} />
                        <Route path="/assinaturas" element={<Assinaturas />} />
                </Routes>
            </Router>
        </>
    );
};
