import React, { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { Usuario } from "../../types/Usuario";
import { useApi } from "../../hooks/useFetch";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storage = localStorage.getItem('authToken');
            // if (storage) {
            //     const data = await api.validateToken(Number(storage));
            //     if (data.type) {
            //         setUsuario(data.usuario)
            //     }
            // }
        }
        validateToken();
    }, [api]);

    const login = async (email: string, senha: string) => {

        const data = await api.login(email, senha);

        if (data) {
            setUsuario(data);
            SetToken('1')
            return true;
        }
        return false;
    }

    const logout = async () => {
        await api.logout();
        setUsuario(null);
    }

    const SetToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}