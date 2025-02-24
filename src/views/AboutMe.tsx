import { Inline } from "../components/Inline";

import { useLanguage } from "../hooks/LanguageProvider";

import profile from "../assets/images/profile.webp";

export function AboutMe() {
    const language = useLanguage();

    return (
        <Inline center noWrap>
            <div className="about-me-block-left">
                <img src={profile} className="profile" />
            </div>
            <div className="about-me-block-right">
                <h3>{language.dictionary.aboutMeHeading}</h3>
                <p>{language.dictionary.aboutMeParagraph1}</p>
                <p>{language.dictionary.aboutMeParagraph2}</p>
                <p>{language.dictionary.aboutMeParagraph3}</p>
                <p>{language.dictionary.aboutMeParagraph4}</p>
            </div>
        </Inline>
    );
}
