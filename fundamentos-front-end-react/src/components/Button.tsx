import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}


export const Button: FC<ButtonProps> = ({ onClick, children }) => (
    <button 
        className="border border-blue-500 px-2 py-1 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-900"
        onClick={onClick}>
            {children}
    </button>
);