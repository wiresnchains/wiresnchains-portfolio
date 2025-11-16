import { ReactNode } from "react";

import "../styles/components/Alert.scss";
import clsx from "clsx";

interface AlertProps {
    type: "success" | "error";
    children?: ReactNode;
}

export function Alert(props: AlertProps) {
    return (
        <span className={clsx("alert", `alert-${props.type}`)}>
            {props.children}
        </span>
    );
}
