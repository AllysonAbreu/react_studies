'use client'

import { useAuth } from "@/context/aula-4/AuthContext";
import { fetchWithAuth } from "@/lib/aula-4/fetchWithToken";
import { useEffect, useState } from "react";

export default function Page() {
    
    const { token } = useAuth();

    const [ response, setResponse ] = useState();

    useEffect(() => {
        if(token){
            (async () => {
                const response = await fetchWithAuth('http://localhost:3000/api/protected', token);
                const data = await response.json();
                setResponse(data);
            })()
        }
    }, [token]);

    if (!token) {
        <div>Nenhum token encontrado</div>
    } 

    return (
        <div>{JSON.stringify(response)}</div>
    );
}