import { ReactNode } from "react";

import "../styles/components/Tag.scss";

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span className="tag">{children}</span>
    );
}
