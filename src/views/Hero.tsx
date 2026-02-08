import { RefObject } from 'react';
import { useTranslation } from '../hooks/use-locale';
import { HeroSection, ScrollIndicator } from '../components/HeroSection';
import { Button } from '../components/Form';

export interface HeroProps {
    aboutMeRef: RefObject<HTMLDivElement | null>;
    setShowContact(showContact: boolean): void;
}

export function Hero(props: HeroProps) {
    const translation = useTranslation();

    return (
        <HeroSection>
            <h1>{translation.hero.heading}</h1>
            <p>{translation.hero.description}</p>

            <div className="flex g-1 center-x">
                <Button type="primary" onClick={() => props.setShowContact(true)}>
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
    );
}
