import { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

import "../styles/components/Hero.scss";

interface HeroProps {
    children?: ReactNode;
}

export function Hero(props: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-content">
                {props.children}
            </div>
        </section>
    );
}

interface ScrollIndicatorProps {
    onClick?(): void;
}

export function ScrollIndicator(props: ScrollIndicatorProps) {
    return (
        <FiChevronDown className="scroll-indicator" onClick={props.onClick} />
    );
}
