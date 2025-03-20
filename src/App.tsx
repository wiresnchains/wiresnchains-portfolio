import { useState, useRef } from "react";

import { Hero, ScrollIndicator } from "./components/Hero";
import { Inline } from "./components/Inline";
import { Button, ContactForm } from "./components/Form";
import { Navbar } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Block, BlockTitle } from "./components/Block";
import { ContactModal } from "./components/Modal";
import { FluidContainer } from "./components/FluidContainer";

import { AboutMe } from "./views/AboutMe";
import { Experience } from "./views/Experience";
import { Projects } from "./views/Projects";
import { Education } from "./views/Education";

import { useLanguage } from "./hooks/LanguageProvider";
import { useTitle } from "./hooks/Title";

export function App() {
    const [showContact, setShowContact] = useState(false);
    const language = useLanguage();

    const aboutMe = useRef<HTMLElement | null>(null);
    const projects = useRef<HTMLElement | null>(null);
    const tools = useRef<HTMLElement | null>(null);
    const education = useRef<HTMLElement | null>(null);
    const contact = useRef<HTMLElement | null>(null);

    useTitle(`${language.dictionary.heading} - ${language.dictionary.portfolio}`);

    return (
        <>
            <Navbar aboutMe={aboutMe} tools={tools} projects={projects} education={education} contact={contact} />
            <Hero>
                <h1>{language.dictionary.heading}</h1>
                <p>{language.dictionary.description}</p>
                <Inline center>
                    <Button type="primary" onClick={() => setShowContact(true)}>{language.dictionary.contact}</Button>
                    <Button type="secondary" onClick={() => { aboutMe.current?.scrollIntoView() }}>{language.dictionary.aboutMe}</Button>
                </Inline>
                <ScrollIndicator onClick={() => { aboutMe.current?.scrollIntoView() }} />
            </Hero>
            <Block refHook={aboutMe}>
                <BlockTitle>{language.dictionary.aboutMe}</BlockTitle>
                <AboutMe />
            </Block>
            <Block refHook={projects}>
                <BlockTitle>{language.dictionary.projects}</BlockTitle>
                <FluidContainer center>
                    <Projects />
                </FluidContainer>
            </Block>
            <Block refHook={tools}>
                <BlockTitle>{language.dictionary.tools}</BlockTitle>
                <FluidContainer center>
                    <Experience />
                </FluidContainer>
            </Block>
            <Block refHook={education}>
                <BlockTitle>{language.dictionary.education}</BlockTitle>
                <FluidContainer center>
                    <Education />
                </FluidContainer>
            </Block>
            <Block refHook={contact}>
                <BlockTitle>{language.dictionary.contact}</BlockTitle>
                <FluidContainer center>
                    <ContactForm />
                </FluidContainer>
            </Block>
            <Footer />
            <ContactModal show={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
