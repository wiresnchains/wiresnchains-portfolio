import { ReactNode } from "react";

import "../styles/components/Tag.scss";

interface TagProps {
    label: string;
    children?: ReactNode;
}

export function Tag(props: TagProps) {
    return (
        <span className="tag">
            <span className="label">{props.label}</span>
            {props.children}
        </span>
    );
}
