import { Inline } from "../components/Inline";

import { useLanguage } from "../hooks/LanguageProvider";

import profile from "../assets/images/profile.webp";

import "../styles/views/AboutMe.scss";
import { Fancybox } from "../components/Fancybox";

export function AboutMe() {
    const language = useLanguage();

    return (
        <Inline noWrap>
            <Fancybox>
                <a data-fancybox="gallery" href={profile}>
                    <img className="about-me-profile" src={profile} alt="profile" />
                </a>
            </Fancybox>

            <div className="about-me-block">
                <h3>{language.dictionary.aboutMeHeading}</h3>
                <p>{language.dictionary.aboutMeParagraph1}</p>
                <p>{language.dictionary.aboutMeParagraph2}</p>
                <p>{language.dictionary.aboutMeParagraph3}</p>
                <p>{language.dictionary.aboutMeParagraph4}</p>
            </div>
        </Inline>
    );
}
