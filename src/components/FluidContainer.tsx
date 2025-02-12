import { ReactNode } from "react";

import "../styles/components/FluidContainer.scss";

export function FluidContainer({ center, children }: { center?: boolean, children: ReactNode }) {
    return (
        <div className={"fluid-container" + (center ? " center" : "")}>
            <div className="content">
                {children}
            </div>
        </div>
    );
}
