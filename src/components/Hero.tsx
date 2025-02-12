import { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

import "../styles/components/Hero.scss";

export function Hero({ children }: { children: ReactNode }) {
    return (
        <section className="hero">
            <div className="hero-content">
                {children}
                <FiChevronDown className="scroll-indicator" />
            </div>
        </section>
    );
}
