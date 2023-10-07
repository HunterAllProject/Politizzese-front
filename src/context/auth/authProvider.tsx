import React, { useState } from "react"
import { authContext } from "./authContext"
import { Usuario } from "../../types/Usuario";
import { Login } from "../../hooks/useFetch";

export const authProvider = ({ children }: { children: JSX.Element }) => {

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const api = Login();

    const login = async (email: string, senha: string) => {
        const data = await api.login(email, senha);
        if (data.usuario && data.token) {
            setUsuario(data.usuario);
            return true;
        }
        return false;
    }

    const logout = async () => {
        await api.logout();
        setUsuario(null);
    }

    return (
        <authContext.Provider value={{ usuario, login, logout }}>
            {children}
        </authContext.Provider>
    )
}