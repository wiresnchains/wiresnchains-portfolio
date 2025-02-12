import { ReactNode } from "react";
import "../styles/components/Hero.scss";

export function Hero({ children }: { children: ReactNode }) {
    return (
        <section className="hero">
            <div className="hero-content">
                {children}
            </div>
        </section>
    );
}
