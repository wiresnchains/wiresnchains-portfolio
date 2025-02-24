import { ReactNode, useEffect, useState } from "react";

import "../styles/components/Inline.scss";

export function Inline({ center, noWrap, children }: { center?: boolean, noWrap?: boolean, children: ReactNode }) {
    const [className, setClassName] = useState("inline");

    useEffect(() => {
        let newClassName = "inline";

        if (center)
            newClassName += " center";

        if (noWrap)
            newClassName += " no-wrap";

        setClassName(newClassName);
    }, [center, noWrap]);

    return (
        <div className={className}>
            {children}
        </div>
    )
}
