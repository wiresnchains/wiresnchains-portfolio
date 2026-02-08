import { useState, useRef } from 'react';
import { Navbar } from './components/Nav';
import { Footer } from './components/Footer';
import { ContactModal } from './components/Modal';
import { Hero } from './views/Hero';
import { AboutMe } from './views/AboutMe';
import { Experience } from './views/Experience';
import { Projects } from './views/Projects';
import { Education } from './views/Education';
import { Contact } from './views/Contact';
import { useTranslation } from './hooks/use-locale';
import { useTitle } from './hooks/use-title';

export function App() {
    const [showContact, setShowContact] = useState(false);
    const translation = useTranslation();

    const aboutMe = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const tools = useRef<HTMLDivElement | null>(null);
    const education = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);

    useTitle(`${translation.hero.heading} - Portfolio`);

    return (
        <>
            <Navbar aboutMe={aboutMe} tools={tools} projects={projects} education={education} contact={contact} />

            <Hero setShowContact={setShowContact} aboutMeRef={aboutMe} />

            <AboutMe ref={aboutMe} />
            <Projects ref={projects} />
            <Experience ref={tools} />
            <Education ref={projects} />
            <Contact ref={contact} />

            <Footer />

            <ContactModal show={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
