import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Footer.scss";

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

export function Footer({ fixed }: { fixed?: boolean }) {
    const language = useLanguage();

    let [className, setClassName] = useState("footer");

    useEffect(() => {
        let newClassName = className;

        if (fixed)
            newClassName += " fixed";

        setClassName(newClassName);
    }, [fixed]);

    return (
        <footer className={className}>
            <FooterGroup>
                <FooterItem>
                    <h4>{language.dictionary.otherLinks}</h4>
                </FooterItem>
                <FooterItem>
                    <NavLink to="https://github.com/wiresnchains/" target="_blank">GitHub</NavLink>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>{language.dictionary.contact}: <a href="mailto:dgrachov@icloud.com">dgrachov@icloud.com</a></p>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>&copy; {new Date().getFullYear()} Danya Grachov</p>
                </FooterItem>
            </FooterGroup>
        </footer>
    );
}
