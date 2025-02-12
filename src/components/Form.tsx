import { MouseEventHandler, ReactNode } from "react";
import "../styles/components/Form.scss";

export function Form({ children }: { children: ReactNode }) {
    return (
        <div className="form">
            {children}
        </div>
    );
}

export function FormRow({ children }: { children: ReactNode }) {
    return (
        <div className="form-row">
            {children}
        </div>
    );
}

export function Button({ type, onClick, children }: { type: "primary" | "secondary", onClick?: MouseEventHandler<HTMLButtonElement>, children: ReactNode }) {
    return (
        <button className={"btn btn-" + type} onClick={onClick}>
            {children}
        </button>
    );
}
