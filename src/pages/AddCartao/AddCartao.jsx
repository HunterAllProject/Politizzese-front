import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./AddCartao.css";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, esta demonstração não precisa redefinir o tema.

const defaultTheme = createTheme();

export const AddCartao = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="form"
                        noValidate
                        // onSubmit={handleSubmit}
                        sx={{ mt: 10 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="number"
                                    label="Número do Cartão"
                                    name="number"
                                    autoComplete="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="validade"
                                    label="MM / AA"
                                    name="text"
                                    autoComplete="validade"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="cvc"
                                    required
                                    fullWidth
                                    id="codigo"
                                    label="CVC"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="name"
                                    label="Nome do títular"
                                    type="text"
                                    id="name"
                                    autoComplete="new-name"
                                />
                            </Grid>
                        </Grid>

                        <div className="butaoAddCartao">
                            <Link to="/editcartao">
                                <p>Cancelar</p>
                            </Link>

                            <Grid item xs={12}>
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
    );
};
