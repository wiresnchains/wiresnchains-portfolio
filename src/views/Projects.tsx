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
                            <h1>FinalForum</h1>
                            <p className="muted small">2020</p>
                        </TimelineBlock>

                        <TimelineBlock>
                            <p>A forum engine with registration, posts, categories, automatic database setup and admin panel</p>
                            <NavLink to="https://github.com/wiresnchains/finalforum" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h1>Endless Mines</h1>
                            <p className="muted small">2023</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>An RPG game on Roblox with multiple progression paths</p>
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
                            <h1>Wave.js</h1>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>A JavaScript library for front-end development with a state manager</p>
                            <NavLink to="https://github.com/wiresnchains/wave" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <h1>Aurora</h1>
                        <p className="muted small">2024</p>
                        <p>An RPG game server in GTA 5 Multiplayer using NodeJS + TypeScript (and wave.js for frontend)</p>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h1>Fusion Engine</h1>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>A C++ Game engine for 2D/3D rendering using SDL2 + OpenGL</p>
                            <NavLink to="https://github.com/wiresnchains/fusion" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <TimelineBlock>
                            <h1>V9</h1>
                            <p className="muted small">2024</p>
                        </TimelineBlock>
                        <TimelineBlock>
                            <p>My own interpreted scripting language designed for static & strict typing</p>
                            <NavLink to="https://github.com/wiresnchains/v9" target="_blank">GitHub</NavLink>
                        </TimelineBlock>
                    </TimelineEvent>
                    <TimelineEvent>
                        <h1>wiresnchains</h1>
                        <p className="muted small">2025</p>
                        <p>My personal website using React for frontend and Express + MySQL for backend</p>
                        <NavLink to="https://wiresnchains.com/" target="_blank">Website</NavLink>
                    </TimelineEvent>
                </Timeline>
            </Block>
            <Footer />
        </>
    );
}
