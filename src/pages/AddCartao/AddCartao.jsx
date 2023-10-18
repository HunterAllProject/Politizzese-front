import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./AddCartao.css";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

const defaultTheme = createTheme();

export const AddCartao = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
    });

    const handleSubimit = (event) => {
        event.preventDefault();

        const storedCartao = JSON.parse(localStorage.getItem("cartoes")) || [];
        storedCartao.push(state);
        localStorage.setItem("cartoes", JSON.stringify(storedCartao));

        console.log("Cartão adicionado com sucesso", state);
        navigate("/listarcartao");
    };

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <>
            <Navbar />
            <div className="tituloGlobal">
                <h1>Adicionar Cartão</h1>
                <div className="barraGlobal"> </div>
            </div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 15,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                        />

                        <Box
                            onSubmit={handleSubimit}
                            component="form"
                            noValidate
                            sx={{ mt: 5 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="number"
                                        label="Número do Cartão"
                                        name="number"
                                        type="text"
                                        autoFocus
                                        value={state.number}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="expiry"
                                        label="MM / AA"
                                        name="expiry"
                                        value={state.expiry}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="cvc"
                                        required
                                        fullWidth
                                        id="codigo"
                                        label="CVC"
                                        value={state.cvc}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        name="name"
                                        label="Nome do títular"
                                        id="name"
                                        value={state.name}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Grid>
                            </Grid>

                            <div className="butaoAddCartao">
                                <Link to="/listarcartao">
                                    <p>Cancelar</p>
                                </Link>

                                <Grid item xs={10}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        // sx={{ mt: 3, mb: 15 }}
                                    >
                                        Adicionar esse Cartão
                                    </Button>
                                </Grid>
                            </div>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer />
        </>
    );
};
