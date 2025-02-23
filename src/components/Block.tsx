import { MutableRefObject, ReactNode } from "react";

import "../styles/components/Block.scss";

export function Block({ refHook, children }: { refHook?: MutableRefObject<HTMLElement | null>, children: ReactNode }) {
    return (
        <section className="block" ref={refHook}>
            {children}
        </section>
    );
}

export function BlockTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="block-title">{children}</h2>
    );
}
