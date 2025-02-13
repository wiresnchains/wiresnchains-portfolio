import { ReactNode } from "react";

import "../styles/components/Tag.scss";

export function Tag({ label, children }: { label: string, children: ReactNode }) {
    return (
        <span className="tag">
            <span className="label">{label}</span>
            {children}
        </span>
    );
}
