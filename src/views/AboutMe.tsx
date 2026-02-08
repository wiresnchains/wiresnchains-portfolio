import { forwardRef } from 'react';
import { Fancybox } from '../components/Fancybox';
import { Block, BlockTitle } from '../components/Block';
import { FluidContainer } from '../components/FluidContainer';
import { useTranslation } from '../hooks/use-locale';
import profile from '../assets/images/profile.webp';
import '../styles/views/AboutMe.scss';

export const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
    const translation = useTranslation();

    return (
        <Block ref={ref}>
            <BlockTitle>{translation.navigation.aboutMe}</BlockTitle>

            <FluidContainer center>
                <div className="flex g-2 scale-mobile">
                    <Fancybox>
                        <a data-fancybox="gallery" href={profile}>
                            <img className="about-me-profile" src={profile} alt="profile" />
                        </a>
                    </Fancybox>

                    <div className="about-me-block">
                        <h3>{translation.aboutMe.heading}</h3>

                        {translation.aboutMe.paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                </div>
            </FluidContainer>
        </Block>
    );
});
