import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../hooks/LanguageProvider";
import { Navbar } from "../components/Nav";
import { Hero, ScrollIndicator } from "../components/Hero";
import { Inline } from "../components/Inline";
import { Button, ContactForm } from "../components/Form";
import { ContactModal } from "../components/Modal";
import { Block, BlockTitle, LimitWidth } from "../components/Block";
import { FluidContainer } from "../components/FluidContainer";
import { Tag } from "../components/Tag";
import { Footer } from "../components/Footer";

export function Home() {
    const language = useLanguage();
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <Helmet>
                <title>{language.dictionary.heading} - {language.dictionary.home}</title>
            </Helmet>
            <Hero>
                <h1>{language.dictionary.heading}</h1>
                <p>{language.dictionary.description}</p>
                <Inline center>
                    <Button type="primary" onClick={() => setShowContact(true)}>{language.dictionary.contact}</Button>
                    <Button type="secondary" onClick={() => { document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" }) }}>{language.dictionary.aboutMe}</Button>
                </Inline>
                <ScrollIndicator onClick={() => { document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" }) }} />
            </Hero>

            <Block id="about-me">
                <BlockTitle>{language.dictionary.aboutMe}</BlockTitle>
                <LimitWidth>
                    <p className="muted">{language.dictionary.aboutMeText}</p>
                </LimitWidth>
            </Block>

            <Block>
                <BlockTitle>{language.dictionary.experience}</BlockTitle>
                <LimitWidth>
                    <Inline center>
                        <Tag label={language.dictionary.desktopDev}>C++</Tag>
                        <Tag label={language.dictionary.desktopDev}>C#</Tag>
                        <Tag label={language.dictionary.gameDev}>Lua/Luau</Tag>
                        <Tag label={language.dictionary.webDev}>NodeJS</Tag>
                        <Tag label={language.dictionary.webDev}>React</Tag>
                        <Tag label={language.dictionary.webDev}>SCSS</Tag>
                        <Tag label={language.dictionary.webDev}>TypeScript</Tag>
                        <Tag label={language.dictionary.webDev}>PHP</Tag>
                        <Tag label={language.dictionary.backendDev}>SQL (MySQL/PostgresSQL)</Tag>
                        <Tag label={language.dictionary.prodEnv}>Docker</Tag>
                        <Tag label={language.dictionary.vcs}>Git</Tag>
                    </Inline>
                </LimitWidth>
            </Block>

            <Block>
                <BlockTitle>{language.dictionary.contact}</BlockTitle>
                <FluidContainer center>
                    <ContactForm />
                </FluidContainer>
            </Block>
            
            <Footer />

            <Navbar fixed />
            {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        </>
    );
}
