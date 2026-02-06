import { Inline } from '../components/Inline';
import { Fancybox } from '../components/Fancybox';

import { useTranslation } from '../hooks/use-locale';

import profile from '../assets/images/profile.webp';

import '../styles/views/AboutMe.scss';

export function AboutMe() {
    const translation = useTranslation();

    return (
        <Inline noWrap>
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
        </Inline>
    );
}
