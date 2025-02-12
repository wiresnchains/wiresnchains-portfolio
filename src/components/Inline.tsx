import { ReactNode } from "react";

import "../styles/components/Inline.scss";

export function Inline({ children }: { children: ReactNode }) {
    return (
        <div className="inline">
            {children}
        </div>
    )
}
