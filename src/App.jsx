import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Login } from "./pages/Login/Login.jsx";

export const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Login />
                <Footer />
            </Router>
        </>
    );
};
