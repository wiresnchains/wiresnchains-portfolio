import { ReactNode } from "react";

import "../styles/components/Block.scss";

export function Block({ children }: { children: ReactNode }) {
    return (
        <section className="block">
            {children}
        </section>
    );
}
