import { ReactNode, RefObject, useEffect, useState } from "react";
import clsx from "clsx";

import { useLanguage } from "../hooks/LanguageProvider";

import uk from "../assets/images/uk.webp";
import nl from "../assets/images/nl.webp";

import "../styles/components/Nav.scss";

interface NavGroupProps {
    children?: ReactNode;
}

export function NavGroup(props: NavGroupProps) {
    return (
        <ul className="nav-group">
            {props.children}
        </ul>
    );
}

interface NavItemProps {
    children?: ReactNode;
}

export function NavItem(props: NavItemProps) {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    );
}

interface NavProps {
    children?: ReactNode;
}

export function Nav(props: NavProps) {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackground(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={clsx("nav", showBackground && "show-background")}>
            {props.children}
        </nav>
    );
}

type SectionRef = RefObject<HTMLElement | null>;

interface NavbarProps {
    aboutMe: SectionRef;
    tools: SectionRef;
    projects: SectionRef;
    education: SectionRef;
    contact: SectionRef;
}

export function Navbar(props: NavbarProps) {
    const language = useLanguage();
    
    return (
        <Nav>
            <NavGroup>
                <NavItem>
                    <a href="#"><h3>{language.dictionary.heading}</h3></a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.aboutMe.current?.scrollIntoView()}>{language.dictionary.aboutMe}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.projects.current?.scrollIntoView()}>{language.dictionary.projects}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.tools.current?.scrollIntoView()}>{language.dictionary.tools}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.education.current?.scrollIntoView()}>{language.dictionary.education}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => props.contact.current?.scrollIntoView()}>{language.dictionary.contact}</a>
                </NavItem>
                <NavItem>
                    <a href="/cv.pdf" target="_blank">CV</a>
                </NavItem>
                <NavItem>
                    <img src={uk} onClick={() => language.setUserLanguage("EN")} alt="en" />
                </NavItem>
                <NavItem>
                    <img src={nl} onClick={() => language.setUserLanguage("NL")} alt="nl" />
                </NavItem>
            </NavGroup>
        </Nav>
    );
}
