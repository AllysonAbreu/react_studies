"use client"
import { useState } from "react";

export const Contador = () => {
    const [contador, _setContador] = useState(0);


    return (
        <div>
            <h2 className="text-2xl">Contador</h2>
            <p>Número atual: {contador}</p>
        </div>
    );
};