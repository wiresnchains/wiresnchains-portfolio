import { ReactNode } from "react";
import clsx from "clsx";

import "../styles/components/FluidContainer.scss";

interface FluidContainerProps {
    center?: boolean;
    children?: ReactNode;
}

export function FluidContainer(props: FluidContainerProps) {
    return (
        <div className={clsx("fluid-container", props.center && "center")}>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}
