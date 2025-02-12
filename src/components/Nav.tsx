import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Nav.scss";
import { useLanguage } from "../hooks/LanguageProvider";
import { DropdownMenu, DropdownItem } from "./Dropdown";

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

export function Nav({ children }: { children: ReactNode }) {
    return (
        <nav className="nav">
            {children}
        </nav>
    );
}

export function Navbar() {
    const language = useLanguage();
    
    return (
        <Nav>
            <NavGroup side={NavGroupSide.Left}>
                <NavItem>
                    <h3>Portfolio</h3>
                </NavItem>
                <NavItem>
                    <NavLink to="/">{language.dictionary.home}</NavLink>
                </NavItem>
            </NavGroup>
            <NavGroup side={NavGroupSide.Right}>
                <NavItem>
                    <DropdownMenu title={language.dictionary.language}>
                        <DropdownItem>
                            <button onClick={() => language.setUserLanguage("EN")}>{language.dictionary.english}</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button onClick={() => language.setUserLanguage("NL")}>{language.dictionary.dutch}</button>
                        </DropdownItem>
                    </DropdownMenu>
                </NavItem>
            </NavGroup>
        </Nav>
    );
}
