import { ReactNode } from "react";
import clsx from "clsx";

import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Footer.scss";

interface FooterGroupProps {
    children?: ReactNode;
}

export function FooterGroup(props: FooterGroupProps) {
    return (
        <ul className="footer-group">
            {props.children}
        </ul>
    );
}

interface FooterItemProps {
    children?: ReactNode;
}

export function FooterItem(props: FooterItemProps) {
    return (
        <li className="footer-item">
            {props.children}
        </li>
    );
}

interface FooterProps {
    fixed?: boolean;
}

export function Footer(props: FooterProps) {
    const language = useLanguage();

    return (
        <footer className={clsx("footer", props.fixed && "fixed")}>
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
