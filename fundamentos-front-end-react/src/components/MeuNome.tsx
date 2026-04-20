import { FC } from "react"

type MeuNomeProps = { 
    name: string;
    age: number;
    birthDate: Date
}

export const MeuNome: FC<MeuNomeProps> = ({ name, age, birthDate }) => (
    <p>
        Me chamo {name} e tenho {age} anos.
        Nasci em {birthDate.toLocaleDateString("pt-BR")}
    </p>    
);