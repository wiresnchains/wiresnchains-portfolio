import { Helmet } from "react-helmet";
import { Block, BlockTitle } from "../components/Block";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Nav";
import { useLanguage } from "../hooks/LanguageProvider";
import { Timeline, TimelineBlock, TimelineEvent } from "../components/Timeline";
import { NavLink } from "react-router-dom";
import { Inline } from "../components/Inline";

import gameScreenshot01 from "../assets/images/01.webp";
import gameScreenshot02 from "../assets/images/02.webp";
import gameScreenshot03 from "../assets/images/03.webp";
import gameScreenshot04 from "../assets/images/04.webp";

export function Projects() {
    const language = useLanguage();

    return (
        <>
            <Helmet>
                <title>{language.dictionary.heading} - {language.dictionary.projects}</title>
            </Helmet>
            <Navbar alwaysScrolled />
            <Block>
                <BlockTitle>{language.dictionary.projects}</BlockTitle>
                <Timeline>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>FinalForum</h2>
                            <p className="muted small">2020</p>
                        </TimelineBlock>

                        <TimelineBlock>
                            <p>{language.dictionary.finalforumDesc}</p>
                            <NavLink to="https://github.com/wiresnchains/finalforum" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>Endless Mines</h2>
                            <p className="muted small">2023</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.emDesc}</p>
                            <NavLink to="#" target="_blank">Link</NavLink>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Inline>
                                <img src={gameScreenshot01} alt="game-screenshot-01" />
                                <img src={gameScreenshot02} alt="game-screenshot-02" />
                                <img src={gameScreenshot03} alt="game-screenshot-03" />
                                <img src={gameScreenshot04} alt="game-screenshot-04" />
                            </Inline>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>Wave.js</h2>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.waveDesc}</p>
                            <NavLink to="https://github.com/wiresnchains/wave" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <h2>Aurora</h2>
                        <p className="muted small">2024</p>
                        <p>{language.dictionary.auroraDesc}</p>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>Fusion Engine</h2>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.fusionDesc}</p>
                            <NavLink to="https://github.com/wiresnchains/fusion" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>V9</h2>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.v9desc}</p>
                            <NavLink to="https://github.com/wiresnchains/v9" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                </Timeline>
            </Block>
            <Footer />
        </>
    );
}
