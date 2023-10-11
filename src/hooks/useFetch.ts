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
    validateToken: async (token: string) => {
        const response = await api.post('/Usuario/validade', { token });
        return response.data;

    },
    login: async (email: string, senha: string) => {
        const response = await api.post('/Usuario/login', { email, senha });
        return response.data;

    },
    logout: async () => {
        const response = await api.post('/Usuario/logout')
        return response.data;
    }
})