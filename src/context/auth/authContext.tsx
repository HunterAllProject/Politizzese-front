import { createContext } from "react";
import { Usuario } from "../../types/Usuario";

export type AuthContextType = {
    usuario: Usuario | null;
    credito: number | 0;
    login: (email: string, senha: string) => Promise<boolean>;
    logout: () => void;
    guardarCredito: (id: number) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);