import { AuthContext } from "./AuthContext";
import {useContext} from "react";
import React from "react";
import { Home } from "../../pages/Home/Home";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    if(auth.usuario){
        return <Home/>;
    }
    return children;
}