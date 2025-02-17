import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import { Block, BlockTitle } from "../components/Block";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Nav";
import { Timeline, TimelineBlock, TimelineEvent } from "../components/Timeline";
import { Inline } from "../components/Inline";
import Fancybox from "../components/Fancybox";
import { Tag } from "../components/Tag";

import { useLanguage } from "../hooks/LanguageProvider";

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
                            <h2>V9</h2>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.v9desc}</p>
                            <NavLink to="https://github.com/wiresnchains/v9" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="Lexer, parser & interpreter">C++</Tag>
                            </Inline>
                        </TimelineBlock>
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
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="OpenGL + SDL2">C++</Tag>
                            </Inline>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>Aurora</h2>
                            <p className="muted small">2024</p>
                            <p>{language.dictionary.auroraDesc}</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="Server">NodeJS</Tag>
                                <Tag label="Server-side + Frontend logic">TypeScript</Tag>
                                <Tag label="Frontend">SCSS</Tag>
                                <Tag label="Frontend">Wave.js</Tag>
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
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="Strong JS typing">TypeScript</Tag>
                            </Inline>
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
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="Server, Client & UI">Roblox Luau</Tag>
                            </Inline>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Fancybox>
                                <Inline>
                                    <a data-fancybox="gallery" href={gameScreenshot01}>
                                        <img src={gameScreenshot01} alt="game-screenshot-01" />
                                    </a>
                                    <a data-fancybox="gallery" href={gameScreenshot02}>
                                        <img src={gameScreenshot02} alt="game-screenshot-02" />
                                    </a>
                                    <a data-fancybox="gallery" href={gameScreenshot03}>
                                        <img src={gameScreenshot03} alt="game-screenshot-03" />
                                    </a>
                                    <a data-fancybox="gallery" href={gameScreenshot04}>
                                        <img src={gameScreenshot04} alt="game-screenshot-04" />
                                    </a>
                                </Inline>
                            </Fancybox>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>FinalForum</h2>
                            <p className="muted small">2020</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.finalforumDesc}</p>
                            <NavLink to="https://github.com/wiresnchains/finalforum" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                            <Inline>
                                <Tag label="Server">PHP</Tag>
                                <Tag label="Database">MySQL</Tag>
                            </Inline>
                        </TimelineBlock>
                    </TimelineEvent>
                </Timeline>
            </Block>
            <Footer />
        </>
    );
}
