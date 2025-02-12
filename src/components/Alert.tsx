import { ReactNode } from "react";

import "../styles/components/Alert.scss";

export function Alert({ type, children }: { type: "success" | "error", children: ReactNode }) {
    return (
        <span className={"alert alert-" + type}>
            {children}
        </span>
    );
}
