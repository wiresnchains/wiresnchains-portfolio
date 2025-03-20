import { Inline } from "../components/Inline";
import { Project } from "../components/Project";

import { useLanguage } from "../hooks/LanguageProvider";

export function Projects() {
    const language = useLanguage();

    return (
        <>
            <Inline center>
                <Project>
                    <h3>V9</h3>
                    <p>{language.dictionary.v9desc}</p>
                </Project>
                <Project>
                    <h3>Endless Mines</h3>
                    <p>{language.dictionary.emDesc}</p>
                </Project>
                <Project>
                    <h3>Aurora</h3>
                    <p>{language.dictionary.auroraDesc}</p>
                </Project>
            </Inline>
        </>
    );
}
