import clsx from 'clsx';
import { type RefObject, useEffect, useState } from 'react';
import { useSetLocale, useTranslation } from '../hooks/use-locale';
import { BaseComponent, BaseParentComponent } from '../types';
import '../styles/components/Nav.scss';

import uk from '../assets/images/uk.webp';
import nl from '../assets/images/nl.webp';

export function NavGroup(props: BaseParentComponent) {
    return <ul className="nav-group">{props.children}</ul>;
}

export function NavItem(props: BaseParentComponent) {
    return <li className="nav-item">{props.children}</li>;
}

export function Nav(props: BaseParentComponent) {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackground(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <nav className={clsx('nav', showBackground && 'show-background')}>{props.children}</nav>;
}

export type SectionRef = RefObject<HTMLElement | null>;

export interface NavbarProps extends BaseComponent {
    aboutMe: SectionRef;
    tools: SectionRef;
    projects: SectionRef;
    education: SectionRef;
    contact: SectionRef;
}

export function Navbar(props: NavbarProps) {
    const translation = useTranslation();
    const setLocale = useSetLocale();

    return (
        <Nav utility={props.utility}>
            <NavGroup>
                <NavItem>
                    <a href="#">
                        <h3>{translation.hero.heading}</h3>
                    </a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.aboutMe.current?.scrollIntoView()}>{translation.navigation.aboutMe}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.projects.current?.scrollIntoView()}>{translation.navigation.projects}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.tools.current?.scrollIntoView()}>{translation.navigation.tools}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.education.current?.scrollIntoView()}>{translation.navigation.education}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.contact.current?.scrollIntoView()}>{translation.navigation.contact}</a>
                </NavItem>
                <NavItem>
                    <a href="/cv.pdf" target="_blank">
                        CV
                    </a>
                </NavItem>
                <NavItem>
                    <img src={uk} onClick={() => setLocale('EN')} alt="en" />
                </NavItem>
                <NavItem>
                    <img src={nl} onClick={() => setLocale('NL')} alt="nl" />
                </NavItem>
            </NavGroup>
        </Nav>
    );
}
