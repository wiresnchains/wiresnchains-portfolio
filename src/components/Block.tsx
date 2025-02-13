import { ReactNode } from "react";

import "../styles/components/Block.scss";

export function Block({ id, children }: { id?: string, children: ReactNode }) {
    return (
        <section className="block" id={id}>
            {children}
        </section>
    );
}

export function BlockTitle({ children }: { children: ReactNode }) {
    return (
        <h1 className="block-title">{children}</h1>
    );
}

export function LimitWidth({ children }: { children: ReactNode }) {
    return (
        <div className="limit-width">
            {children}
        </div>
    );
}
