import { MutableRefObject, ReactNode, useState } from "react";

import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Nav.scss";

import uk from "../assets/images/uk.webp";
import nl from "../assets/images/nl.webp";

export function NavGroup({ children }: { children: ReactNode }) {
    return (
        <ul className="nav-group">
            {children}
        </ul>
    );
}

export function NavItem({ children }: { children: ReactNode }) {
    return (
        <li className="nav-item">
            {children}
        </li>
    );
}

export function Nav({ children }: { children: ReactNode }) {
    const [className, setClassName] = useState("nav");

    window.addEventListener("scroll", () => {
        let newClassName = "nav";

        if (window.scrollY > 1)
            newClassName += " show-background";

        setClassName(newClassName);
    });

    return (
        <nav className={className}>
            {children}
        </nav>
    );
}

type NavRef = MutableRefObject<HTMLElement | null>;

export function Navbar({ aboutMe, experience, projects, education, contact }: { aboutMe: NavRef, experience: NavRef, projects: NavRef, education: NavRef, contact: NavRef }) {
    const language = useLanguage();
    
    return (
        <Nav>
            <NavGroup>
                <NavItem>
                    <a href="#"><h3>{language.dictionary.heading}</h3></a>
                </NavItem>
                <NavItem>
                    <a onClick={() => aboutMe.current?.scrollIntoView()}>{language.dictionary.aboutMe}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => experience.current?.scrollIntoView()}>{language.dictionary.experience}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => projects.current?.scrollIntoView()}>{language.dictionary.projects}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => education.current?.scrollIntoView()}>{language.dictionary.education}</a>
                </NavItem>
                <NavItem>
                    <a onClick={() => contact.current?.scrollIntoView()}>{language.dictionary.contact}</a>
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
