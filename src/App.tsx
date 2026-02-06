import { useState, useRef } from 'react';

import { Hero, ScrollIndicator } from './components/Hero';
import { Inline } from './components/Inline';
import { Button, ContactForm } from './components/Form';
import { Navbar } from './components/Nav';
import { Footer } from './components/Footer';
import { Block, BlockTitle } from './components/Block';
import { ContactModal } from './components/Modal';
import { FluidContainer } from './components/FluidContainer';

import { AboutMe } from './views/AboutMe';
import { Experience } from './views/Experience';
import { Projects } from './views/Projects';
import { Education } from './views/Education';

import { useTranslation } from './hooks/use-locale';
import { useTitle } from './hooks/use-title';

export function App() {
    const [showContact, setShowContact] = useState(false);
    const translation = useTranslation();

    const aboutMe = useRef<HTMLElement | null>(null);
    const projects = useRef<HTMLElement | null>(null);
    const tools = useRef<HTMLElement | null>(null);
    const education = useRef<HTMLElement | null>(null);
    const contact = useRef<HTMLElement | null>(null);

    useTitle(`${translation.hero.heading} - Portfolio`);

    return (
        <>
            <Navbar aboutMe={aboutMe} tools={tools} projects={projects} education={education} contact={contact} />
            <Hero>
                <h1>{translation.hero.heading}</h1>
                <p>{translation.hero.description}</p>
                <Inline center>
                    <Button type="primary" onClick={() => setShowContact(true)}>
                        {translation.navigation.contact}
                    </Button>
                    <Button
                        type="secondary"
                        onClick={() => {
                            aboutMe.current?.scrollIntoView();
                        }}
                    >
                        {translation.navigation.aboutMe}
                    </Button>
                </Inline>
                <ScrollIndicator
                    onClick={() => {
                        aboutMe.current?.scrollIntoView();
                    }}
                />
            </Hero>
            <Block ref={aboutMe}>
                <BlockTitle>{translation.navigation.aboutMe}</BlockTitle>
                <FluidContainer center>
                    <AboutMe />
                </FluidContainer>
            </Block>
            <Block ref={projects}>
                <BlockTitle>{translation.navigation.projects}</BlockTitle>
                <FluidContainer center>
                    <Projects />
                </FluidContainer>
            </Block>
            <Block ref={tools}>
                <BlockTitle>{translation.navigation.tools}</BlockTitle>
                <FluidContainer center>
                    <Experience />
                </FluidContainer>
            </Block>
            <Block ref={education}>
                <BlockTitle>{translation.navigation.education}</BlockTitle>
                <FluidContainer center>
                    <Education />
                </FluidContainer>
            </Block>
            <Block ref={contact}>
                <BlockTitle>{translation.navigation.contact}</BlockTitle>
                <FluidContainer center>
                    <ContactForm />
                </FluidContainer>
            </Block>
            <Footer />
            <ContactModal show={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
