import { Helmet } from "react-helmet";

import { Navbar } from "../components/Nav";
import { Block, BlockTitle } from "../components/Block";
import { Footer } from "../components/Footer";
import { Timeline, TimelineBlock, TimelineEvent } from "../components/Timeline";

import { useLanguage } from "../hooks/LanguageProvider";

export function Educatie() {
    const language = useLanguage();

    return (
        <>
            <Helmet>
                <title>{language.dictionary.heading} - {language.dictionary.education}</title>
            </Helmet>
            <Navbar alwaysScrolled />
            <Block>
                <BlockTitle>{language.dictionary.education}</BlockTitle>
                <Timeline>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>Scalda MBO-4</h2>
                            <p className="muted small">Vlissingen, NL</p>
                            <p className="muted small">2025, Current</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Software Developer</h4>
                            <h5>{language.dictionary.classesAndResults}</h5>
                            <p className="muted small">{language.dictionary.lbs} - V ({language.dictionary.passed})</p>
                            <p className="muted small">Scrum - G ({language.dictionary.passed})</p>
                            <p className="muted small">Databases - G ({language.dictionary.passed})</p>
                            <p className="muted small">Programming - G ({language.dictionary.passed})</p>
                            <p className="muted small">Software Engineering - V ({language.dictionary.passed})</p>
                            <p className="muted small">Front-end - G ({language.dictionary.passed})</p>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>{language.dictionary.isk}</h2>
                            <p className="muted small">Middelburg, NL</p>
                            <p className="muted small">2022-2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h5>{language.dictionary.classesAndResults}</h5>
                            <p className="muted small">{language.dictionary.maths} - 3F ({language.dictionary.passed})</p>
                            <p className="muted small">NT2 {language.dictionary.speaking} - B1 ({language.dictionary.passed})</p>
                            <p className="muted small">NT2 {language.dictionary.listening} - B1 ({language.dictionary.passed})</p>
                            <p className="muted small">NT2 {language.dictionary.writing} - B1 ({language.dictionary.passed})</p>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>British International School Kyiv</h2>
                            <p className="muted small">Kyiv, UA</p>
                            <p className="muted small">2013-2022</p>
                        </TimelineBlock>
                    </TimelineEvent>
                </Timeline>
            </Block>
            <Footer fixed />
        </>
    );
}
