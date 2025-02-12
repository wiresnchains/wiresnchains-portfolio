import { useLanguage } from "../hooks/LanguageProvider";
import { Navbar } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Inline } from "../components/Inline";
import { Button, ContactForm } from "../components/Form";
import { useState } from "react";
import { ContactModal } from "../components/Modal";
import { Block } from "../components/Block";
import { FluidContainer } from "../components/FluidContainer";

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
            </Hero>

            <Block>
                <h2>{language.dictionary.aboutMe}</h2>
                <p className="muted">Lorem ipsum dolor sit amet</p>
            </Block>

            <Block>
                <h2>{language.dictionary.projects}</h2>
                <p className="muted">Lorem ipsum dolor sit amet</p>
            </Block>

            <Block>
                <h2>{language.dictionary.contact}</h2>
                <FluidContainer center>
                    <ContactForm />
                </FluidContainer>
            </Block>

            <Navbar />
            {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        </>
    );
}
