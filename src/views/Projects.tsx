import { Card, CardGallery } from "../components/Card";
import { Inline } from "../components/Inline";

import { useLanguage } from "../hooks/LanguageProvider";

import aurora01 from "../assets/images/aurora-01.webp";
import endlessMines01 from "../assets/images/endless-mines-01.webp";
import endlessMines02 from "../assets/images/endless-mines-02.webp";
import endlessMines03 from "../assets/images/endless-mines-03.webp";
import endlessMines04 from "../assets/images/endless-mines-04.webp";

export function Projects() {
    const language = useLanguage();

    return (
        <>
            <Inline center>
                <Card>
                    <CardGallery images={[{ src: aurora01, alt: "aurora" }]} />
                    <h3>Aurora</h3>
                    <p>{language.dictionary.auroraDesc}</p>
                    <a href="https://github.com/wiresnchains/aurora" target="_blank">GitHub</a>
                </Card>
                <Card>
                    <CardGallery images={[{ src: endlessMines01, alt: "em01" }, { src: endlessMines02, alt: "em02" }, { src: endlessMines03, alt: "em03" }, { src: endlessMines04, alt: "em04" }]} />
                    <h3>Endless Mines</h3>
                    <p>{language.dictionary.emDesc}</p>
                    <a href="https://roblox.com/" target="_blank">Link</a>
                </Card>
                <Card>
                    <h3>V9</h3>
                    <p>{language.dictionary.v9desc}</p>
                    <a href="https://github.com/wiresnchains/v9" target="_blank">GitHub</a>
                </Card>
                <Card>
                    <h3>Wave.js</h3>
                    <p>{language.dictionary.waveDesc}</p>
                    <a href="https://github.com/wiresnchains/wave" target="_blank">GitHub</a>
                </Card>
            </Inline>
        </>
    );
}
