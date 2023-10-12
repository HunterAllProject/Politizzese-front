import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { RecSenha } from "./pages/RecSenha/RecSenha.jsx";
import { AddCartao } from "./pages/AddCartao/AddCartao.jsx";
import { ListarCartao } from "./pages/ListarCartao/ListarCartao.tsx";
import { NovosServicos } from "./pages/NovosServicos/NovosServicos.jsx";
import { Extrato } from "./pages/Extrato/Extrato.jsx";
import { Credito } from "./pages/Creditos/Credito.tsx";
import { Assinaturas } from './pages/Assinaturas/Assinaturas.jsx';
import { RequireAuth } from './context/auth/RequireAuth'

export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/recsenha" element={<RecSenha />} />
                    <Route path="/" element={<RequireAuth> <Home /></RequireAuth>} />
                    <Route path="/addcartao" element={<RequireAuth> <AddCartao /></RequireAuth>} />
                    <Route path="/listarcartao" element={<RequireAuth> <ListarCartao /></RequireAuth>} />
                    <Route path="/novosservicos" element={<RequireAuth><NovosServicos /></RequireAuth>} />
                    <Route path="/assinaturas" element={<RequireAuth><Assinaturas /></RequireAuth>} />
                    <Route path="/extrato" element={<RequireAuth><Extrato /></RequireAuth>} />
                    <Route path="/credito" element={<RequireAuth><Credito /></RequireAuth>} />
                </Routes>
            </Router>
        </>
    );
};
