import { useLanguage } from "../hooks/LanguageProvider";
import { Navbar } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Inline } from "../components/Inline";
import { Button } from "../components/Form";
import { useState } from "react";
import { ContactModal } from "../components/Modal";

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
            <Navbar />
            {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        </>
    );
}
