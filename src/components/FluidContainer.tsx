import { ReactNode, useEffect, useState } from "react";

import "../styles/components/FluidContainer.scss";

export function FluidContainer({ center, children }: { center?: boolean, children: ReactNode }) {
    const [className, setClassName] = useState("fluid-container");

    useEffect(() => {
        let newClassName = "fluid-container";

        if (center)
            newClassName += " center";

        setClassName(newClassName);
    }, [center]);

    return (
        <div className={className}>
            <div className="content">
                {children}
            </div>
        </div>
    );
}
