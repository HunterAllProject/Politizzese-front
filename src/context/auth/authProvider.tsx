import React, { useState } from "react"
import { AuthContext } from "./AuthContext"
import { Usuario } from "../../types/Usuario";
import { useApi } from "../../hooks/useFetch";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const api = useApi();

    const login = async (email: string, senha: string) => {

        const data = await api.login(email, senha);

        if (data) {
            setUsuario(data);
            return true;
        }
        return false;
    }

    const logout = async () => {
        await api.logout();
        setUsuario(null);
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}