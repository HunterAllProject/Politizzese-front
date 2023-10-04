import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { RecSenha } from "./pages/RecSenha/RecSenha.jsx";
import { AddCartao } from "./pages/AddCartao/AddCartao.jsx";
import {NovosServicos} from './pages/NovosServicos/NovosServicos.jsx';
import {Assinaturas} from './pages/Assinaturas/Assinaturas.jsx';

export const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recsenha" element={<RecSenha />} />
                    <Route path="/addcartao" element={<AddCartao />} />
                    <Route path="/novoserv" element={<NovosServicos />} />
                    <Route path="/assinaturas" element={<Assinaturas />} />
                </Routes>
                
                <Footer />
            </Router>
        </>
    );
};
