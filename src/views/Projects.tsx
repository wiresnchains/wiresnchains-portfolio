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
import auroraScreenshot01 from "../assets/images/aurora.png";

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
                            <h2>my.wiresnchains.com</h2>
                            <p className="muted small">2025</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.portfolioDesc}</p>
                            <Inline>
                                <NavLink to="https://github.com/wiresnchains/portfolio" target="_blank">GitHub</NavLink>
                            </Inline>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Inline>
                                <Tag label="Web server">nginx</Tag>
                                <Tag label="Production environment">Docker</Tag>
                                <Tag label="Build system">NodeJS</Tag>
                                <Tag label="Static typing">TypeScript (TSX)</Tag>
                                <Tag label="Frontend">React</Tag>
                                <Tag label="Frontend">SCSS</Tag>
                            </Inline>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h2>wiresnchains.com</h2>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>{language.dictionary.wncDesc}</p>
                            <Inline>
                                <NavLink to="https://wiresnchains.com/" target="_blank">Link</NavLink>
                                <NavLink to="https://github.com/wiresnchains/wiresnchains-web" target="_blank">GitHub</NavLink>
                            </Inline>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Inline>
                                <Tag label="Web server">nginx</Tag>
                                <Tag label="Production environment">Docker</Tag>
                                <Tag label="Server side + Build system">NodeJS</Tag>
                                <Tag label="API server">Express</Tag>
                                <Tag label="Static typing">TypeScript</Tag>
                                <Tag label="Frontend">React</Tag>
                                <Tag label="Frontend">SCSS</Tag>
                            </Inline>
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
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                        </TimelineBlock>
                        <TimelineBlock>
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
                            <NavLink to="https://github.com/wiresnchains/cardspire/tree/dev" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Inline>
                                <Tag label="OpenGL + SDL2">C++</Tag>
                                <Tag label="Shading">GLSL</Tag>
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
                        </TimelineBlock>
                        <TimelineBlock>
                            <Inline>
                                <Tag label="Production environment">Docker</Tag>
                                <Tag label="Server">NodeJS</Tag>
                                <Tag label="Server-side + Frontend logic">TypeScript</Tag>
                                <Tag label="Frontend">SCSS</Tag>
                                <Tag label="Frontend">Wave.js</Tag>
                            </Inline>
                        </TimelineBlock>
                        <TimelineBlock>
                            <Fancybox>
                                <Inline>
                                    <a data-fancybox="gallery" href={auroraScreenshot01}>
                                        <img src={auroraScreenshot01} alt="aurora-screenshot-01" />
                                    </a>
                                </Inline>
                            </Fancybox>
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
                        </TimelineBlock>
                        <TimelineBlock>
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
                            <NavLink to="https://www.roblox.com/games/8898754223/" target="_blank">Link</NavLink>
                        </TimelineBlock>
                        <TimelineBlock>
                            <h4>Tech Stack</h4>
                        </TimelineBlock>
                        <TimelineBlock>
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
                        </TimelineBlock>
                        <TimelineBlock>
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
