import { useState } from "react";
import { useLanguage } from "../hooks/LanguageProvider";
import { Navbar } from "../components/Nav";
import { Hero, ScrollIndicator } from "../components/Hero";
import { Inline } from "../components/Inline";
import { Button, ContactForm } from "../components/Form";
import { ContactModal } from "../components/Modal";
import { Block } from "../components/Block";
import { FluidContainer } from "../components/FluidContainer";
import { Tag } from "../components/Tag";
import { Footer } from "../components/Footer";

export function Home() {
    const language = useLanguage();
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <Hero>
                <h1>{language.dictionary.heading}</h1>
                <p>{language.dictionary.description}</p>
                <Inline center>
                    <Button type="primary" onClick={() => setShowContact(true)}>{language.dictionary.contact}</Button>
                    <Button type="secondary">{language.dictionary.aboutMe}</Button>
                </Inline>
                <ScrollIndicator />
            </Hero>

            <Block>
                <h2>{language.dictionary.aboutMe}</h2>
                <p className="muted">Lorem ipsum dolor sit amet</p>
            </Block>

            <Block>
                <h2>{language.dictionary.experience}</h2>
                <h3>{language.dictionary.desktopDev}</h3>
                <Inline center>
                    <Tag>C++</Tag>
                    <Tag>C#</Tag>
                    <Tag>Lua/Luau</Tag>
                </Inline>
                <h3>{language.dictionary.webDev}</h3>
                <Inline center>
                    <Tag>NodeJS</Tag>
                    <Tag>React</Tag>
                    <Tag>SCSS</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>PHP</Tag>
                    <Tag>SQL (MySQL/PostgresSQL)</Tag>
                </Inline>
                <h3>{language.dictionary.tools}</h3>
                <Inline center>
                    <Tag>Docker</Tag>
                    <Tag>Git</Tag>
                </Inline>
            </Block>

            <Block>
                <h2>{language.dictionary.contact}</h2>
                <FluidContainer center>
                    <ContactForm />
                </FluidContainer>
            </Block>
            
            <Footer />

            <Navbar />
            {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        </>
    );
}
