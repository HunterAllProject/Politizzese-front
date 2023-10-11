import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import React from "react";
import { Login } from "../../pages/Login/Login";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    if (!auth.usuario) {
        return <Login />;
    }
    return children;
}