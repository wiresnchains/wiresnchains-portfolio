import clsx from 'clsx';
import { FiChevronDown } from 'react-icons/fi';
import { BaseParentComponent } from '../types';
import '../styles/components/Hero.scss';

export function HeroSection(props: BaseParentComponent) {
    return (
        <section className={clsx('hero', props.utility)}>
            <div className="hero-content">{props.children}</div>
        </section>
    );
}

interface ScrollIndicatorProps {
    onClick?(): void;
}

export function ScrollIndicator(props: ScrollIndicatorProps) {
    return <FiChevronDown className="scroll-indicator" onClick={props.onClick} />;
}
