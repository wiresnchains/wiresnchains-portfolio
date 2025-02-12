import { ReactNode } from "react";

import "../styles/components/Inline.scss";

export function Inline({ center, children }: { center?: boolean, children: ReactNode }) {
    return (
        <div className={center ? "inline center" : "inline"}>
            {children}
        </div>
    )
}
