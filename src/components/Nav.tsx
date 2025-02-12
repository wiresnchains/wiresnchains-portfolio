import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useLanguage } from "../hooks/LanguageProvider";
import { DropdownMenu, DropdownItem } from "./Dropdown";

import "../styles/components/Nav.scss";

export enum NavGroupSide {
    Left,
    Right
}

export function NavGroup({ side, children }: { side?: NavGroupSide, children: ReactNode }) {
    const [sideClass, setSideClass] = useState("left");

    useEffect(() => {
        switch (side) {
            case NavGroupSide.Left:
                setSideClass("left");
                break;
            case NavGroupSide.Right:
                setSideClass("right");
                break;
            default:
                setSideClass("left");
                break;
        }
    }, [side]);

    return (
        <ul className={"nav-group " + sideClass}>
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

export function Nav({ alwaysScrolled, children }: { alwaysScrolled?: boolean, children: ReactNode }) {
    const [scrolled, setScrolled] = useState(false);

    if (!alwaysScrolled) {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY > 1);
        });
    }
    else {
        if (!scrolled)
            setScrolled(true);
    }

    return (
        <nav className={scrolled ? "nav show-background" : "nav"}>
            {children}
        </nav>
    );
}

export function Navbar({ alwaysScrolled }: { alwaysScrolled?: boolean }) {
    const language = useLanguage();
    
    return (
        <Nav alwaysScrolled={alwaysScrolled}>
            <NavGroup side={NavGroupSide.Left}>
                <NavItem>
                    <h3>{language.dictionary.heading}</h3>
                </NavItem>
                <NavItem>
                    <NavLink to="/">{language.dictionary.home}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects">{language.dictionary.projects}</NavLink>
                </NavItem>
                <NavItem>
                    <DropdownMenu title={language.dictionary.language}>
                        <DropdownItem active={language.userLanguage === "EN"}>
                            <button onClick={() => language.setUserLanguage("EN")}>{language.dictionary.english}</button>
                        </DropdownItem>
                        <DropdownItem active={language.userLanguage === "NL"}>
                            <button onClick={() => language.setUserLanguage("NL")}>{language.dictionary.dutch}</button>
                        </DropdownItem>
                    </DropdownMenu>
                </NavItem>
            </NavGroup>
        </Nav>
    );
}
