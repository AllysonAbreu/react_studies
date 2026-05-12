"use client"

import { ContadorContext } from "@/context/aula-2/ContadorContext";
import { useContext } from "react";
import { Button } from "./Button";

export const ValorContadorGlobal = () => {
    const { contador } = useContext(ContadorContext);

    return (
            <div className="grid gap-y-4">
                <p>Valor no meu Contador Global: {contador}</p>
            </div>        
        );
};