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

export function useFetchPost(url: string,) {

    useEffect(() => {
        api.post(url, {

        })
            .then(response => {
            })
            .catch((error) => console.log(error));
    }, [])
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
    }
})