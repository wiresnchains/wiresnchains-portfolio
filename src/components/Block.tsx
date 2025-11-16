import { forwardRef, ReactNode } from "react";

import "../styles/components/Block.scss";

interface BlockProps {
    children?: ReactNode;
}

export const Block = forwardRef<HTMLElement, BlockProps>((props, ref) => (
    <section className="block" ref={ref}>
        {props.children}
    </section>
));

interface BlockTitleProps {
    children?: ReactNode;
}

export function BlockTitle(props: BlockTitleProps) {
    return (
        <h2 className="block-title">{props.children}</h2>
    );
}
