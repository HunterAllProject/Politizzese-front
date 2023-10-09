import { authContext } from "./authContext";
import {Login} from "../../pages/Login/Login";
import {useContext} from "react";
import React from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(authContext);
    if(auth.usuario){
        return <Login/>;
    }
    return children;
}