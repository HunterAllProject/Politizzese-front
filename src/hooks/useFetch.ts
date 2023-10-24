import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: 'https://politizzese-back.azurewebsites.net/'
});

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    useEffect(() => {
        api.get(url)
            .then(response => {
                setData(response.data);
            })
    }, [])
    return { data }
}

export const useApi = () => ({

    validateToken: async (token: number) => {
        const response = await api.post('Usuario/ValidaToken', { token });
        console.log(response)
        return response.data;

    },

    login: async (email: string, senha: string) => {
        const response = await api.post('/Usuario/login', { email, senha });
        return response.data;

    },

    logout: async () => {
        const response = await api.post('/Usuario/logout')
        return response.data;
    },

    cadastro: async (usuario: any) => {
        const response = await api.post('Usuario', { 
            nomeCompleto: usuario.nomeCompleto,
            email: usuario.email,
            senha: usuario.senha
         });
        return response.data;
    },

    cadastrarCartao: async(cartao: any, idUSuario: number) =>{
        const response = await api.post('CartaoCredito', { 
            numero: cartao.number,
            expiracao: cartao.expiry,
            codigo: cartao.cvc,
            nome: cartao.name,
            idUsuario: idUSuario
         });
        return response.data;
    }
})