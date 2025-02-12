import { ReactNode } from "react";

import "../styles/components/Footer.scss";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../hooks/LanguageProvider";

export function FooterGroup({ children }: { children: ReactNode }) {
    return (
        <ul className="footer-group">
            {children}
        </ul>
    );
}

export function FooterItem({ children }: { children: ReactNode }) {
    return (
        <li className="footer-item">
            {children}
        </li>
    );
}

export function Footer() {
    const language = useLanguage();

    return (
        <footer className="footer">
            <FooterGroup>
                <FooterItem>
                    <h4>{language.dictionary.otherLinks}</h4>
                </FooterItem>
                <FooterItem>
                    <NavLink to="https://github.com/wiresnchains/">GitHub</NavLink>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>&copy; 2024 Danya Grachov</p>
                </FooterItem>
            </FooterGroup>
        </footer>
    );
}
