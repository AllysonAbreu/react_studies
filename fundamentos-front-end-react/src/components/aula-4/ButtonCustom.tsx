import { ButtonHTMLAttributes, FC } from "react";

export const ButtonCustom: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, children, ...props }) => (
    <button 
        className="border border-blue-500 p-2 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-900 font-bold"
        onClick={onClick}
            {...props}>
            {children}
    </button>
);