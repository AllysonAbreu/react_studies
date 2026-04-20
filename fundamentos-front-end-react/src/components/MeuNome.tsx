import { FC } from "react"

export const MeuNome: FC<{ name: string; age: number; birthDate: Date}> = (props) => {
    return(
        <>
            <p> Me chamo {props.name} e tenho {props.age} anos.</p>
            <p> Nasci em {props.birthDate.toLocaleDateString("pt-BR")}</p>
        </>
    );
}