import { RefObject, useState } from 'react';
import { HeroSection, ScrollIndicator } from '../components/HeroSection';
import { Button } from '../components/Form';
import { ContactModal } from '../components/Modal';
import { useTranslation } from '../hooks/use-locale';

export interface HeroProps {
    aboutMeRef: RefObject<HTMLDivElement | null>;
}

export function Hero(props: HeroProps) {
    const [showContact, setShowContact] = useState(false);
    const translation = useTranslation();

    return (
        <>
            <HeroSection>
                <h1>{translation.hero.heading}</h1>
                <p>{translation.hero.description}</p>

                <div className="flex g-1 center-x">
                    <Button type="primary" onClick={() => setShowContact(true)}>
                        {translation.navigation.contact}
                    </Button>

                    <Button
                        type="secondary"
                        onClick={() => {
                            props.aboutMeRef.current?.scrollIntoView();
                        }}
                    >
                        {translation.navigation.aboutMe}
                    </Button>
                </div>

                <ScrollIndicator
                    onClick={() => {
                        props.aboutMeRef.current?.scrollIntoView();
                    }}
                />
            </HeroSection>

            <ContactModal show={showContact} close={() => setShowContact(false)} />
        </>
    );
}
