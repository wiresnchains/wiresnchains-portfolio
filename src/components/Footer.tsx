import clsx from 'clsx';
import { useTranslation } from '../hooks/use-locale';
import { BaseParentComponent } from '../types';
import '../styles/components/Footer.scss';

export function FooterGroup(props: BaseParentComponent) {
    return <ul className="footer-group">{props.children}</ul>;
}

export function FooterItem(props: BaseParentComponent) {
    return <li className="footer-item">{props.children}</li>;
}

interface FooterProps {
    fixed?: boolean;
}

export function Footer(props: FooterProps) {
    const translation = useTranslation();

    return (
        <footer className={clsx('footer', props.fixed && 'fixed')}>
            <FooterGroup>
                <FooterItem>
                    <h5>{translation.footer.otherLinks}</h5>
                </FooterItem>
                <FooterItem>
                    <a href="https://www.linkedin.com/in/dgrachov/" target="_blank">
                        LinkedIn
                    </a>
                </FooterItem>
                <FooterItem>
                    <a href="https://github.com/wiresnchains/" target="_blank">
                        GitHub
                    </a>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>
                        {translation.navigation.contact}:{' '}
                        <a href="mailto:dgrachov@student.scalda.nl">dgrachov@student.scalda.nl</a>
                    </p>
                </FooterItem>
            </FooterGroup>
            <FooterGroup>
                <FooterItem>
                    <p>
                        &copy; {new Date().getFullYear()} {translation.hero.heading}
                    </p>
                </FooterItem>
            </FooterGroup>
        </footer>
    );
}
