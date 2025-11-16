import { ReactNode } from "react";
import clsx from "clsx";

import "../styles/components/Inline.scss";

interface InlineProps {
    center?: boolean;
    noWrap?: boolean;
    children?: ReactNode;
}

export function Inline(props: InlineProps) {
    return (
        <div className={clsx("inline", props.center && "center", props.noWrap && "no-wrap")}>
            {props.children}
        </div>
    )
}
