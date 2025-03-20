import { ReactNode } from "react";

import "../styles/components/Project.scss";

export function Project({ children }: { children: ReactNode }) {
    return (
        <div className="project">
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
}
