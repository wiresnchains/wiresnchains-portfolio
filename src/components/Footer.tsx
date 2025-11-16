import { ReactNode, useEffect, useState } from "react";

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
                    <h5>{language.dictionary.otherLinks}</h5>
                </FooterItem>
                <FooterItem>
                    <a href="https://www.linkedin.com/in/dgrachov/" target="_blank">LinkedIn</a>
                </FooterItem>
                <FooterItem>
                    <a href="https://github.com/wiresnchains/" target="_blank">GitHub</a>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>{language.dictionary.contact}: <a href="mailto:dgrachovsd@gmail.com">dgrachovsd@gmail.com</a></p>
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
