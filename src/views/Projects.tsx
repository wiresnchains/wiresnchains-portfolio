import { Timeline, TimelineBlock, TimelineEvent } from "../components/Timeline";
import { Inline } from "../components/Inline";
import { Fancybox } from "../components/Fancybox";
import { Tag } from "../components/Tag";

import { useLanguage } from "../hooks/LanguageProvider";

import em01 from "../assets/images/endless-mines-01.webp";
import em02 from "../assets/images/endless-mines-02.webp";
import em03 from "../assets/images/endless-mines-03.webp";
import em04 from "../assets/images/endless-mines-04.webp";
import aurora01 from "../assets/images/aurora-01.webp";

interface IProject {
    name: string;
    year: number;
    description: string;
    links: Array<{ link: string, name: string }>;
    techStack: Array<{ label: string, name: string }>,
    gallery: Array<string>
}

const PROJECT_LIST: Array<IProject> = [
    {
        name: "my.wiresnchains.com",
        year: 2025,
        description: "My personal portfolio",
        links: [{ link: "https://github.com/wiresnchains/portfolio", name: "GitHub" }],
        techStack: [
            { label: "Frontend", name: "React" },
            { label: "Frontend", name: "SCSS" },
            { label: "Strict typing", name: "TypeScript (TSX)" },
            { label: "Webserver", name: "NGINX" },
            { label: "Production environment", name: "Docker" }
        ],
        gallery: []
    },

    {
        name: "V9",
        year: 2024,
        description: "My own interpreted scripting language designed for static & strict typing",
        links: [{ link: "https://github.com/wiresnchains/v9", name: "GitHub" }],
        techStack: [
            { label: "Lexer, parser & interpreter", name: "C++" }
        ],
        gallery: []
    },

    {
        name: "Fusion Engine",
        year: 2024,
        description: "Game engine for 2D/3D rendering using OpenGL + SDL2",
        links: [{ link: "https://github.com/wiresnchains/fusion", name: "GitHub" }],
        techStack: [
            { label: "OpenGL + SDL2", name: "C++" },
            { label: "Shaders", name: "GLSL" }
        ],
        gallery: []
    },

    {
        name: "Aurora",
        year: 2024,
        description: "A game server with an RPG in GTA 5 multiplayer",
        links: [{ link: "https://github.com/wiresnchains/fusion", name: "GitHub" }],
        techStack: [
            { label: "Server", name: "NodeJS" },
            { label: "Strict typing", name: "TypeScript" },
            { label: "Frontend", name: "Wave.js" },
            { label: "Frontend", name: "SCSS" },
            { label: "Database", name: "MySQL" },
            { label: "Production environment", name: "Docker" }
        ],
        gallery: [aurora01]
    },

    {
        name: "Wave.js",
        year: 2024,
        description: "JavaScript library for front-end state management",
        links: [{ link: "https://github.com/wiresnchains/wave", name: "GitHub" }],
        techStack: [
            { label: "Strict typing", name: "TypeScript" }
        ],
        gallery: []
    },

    {
        name: "Endless Mines",
        year: 2023,
        description: "RPG game on the \"Roblox\" platform with multiple progression paths",
        links: [{ link: "https://github.com/wiresnchains/wave", name: "GitHub" }],
        techStack: [
            { label: "Server, Client & UI", name: "Luau" }
        ],
        gallery: [em01, em02, em03, em04]
    },

    {
        name: "FinalForum",
        year: 2020,
        description: "Forum engine with registration, posts, categories, automatic database setup and administration panel",
        links: [{ link: "https://github.com/wiresnchains/finalforum", name: "GitHub" }],
        techStack: [
            { label: "Server", name: "PHP" },
            { label: "Database", name: "MySQL" }
        ],
        gallery: []
    }
];

export function Projects() {
    const language = useLanguage();

    return (
        <Timeline>
            {PROJECT_LIST.map((project) => (
                <TimelineEvent>
                    <TimelineBlock>
                        <h3>{project.name}</h3>
                        <p className="muted small">{project.year}</p>
                    </TimelineBlock>
                    <TimelineBlock>
                        <p>{project.description}</p>
                    </TimelineBlock>
                    <TimelineBlock>
                        <Inline>
                            {project.links.map((link) => (
                                <a href={link.link} target="_blank">{link.name}</a>
                            ))}
                        </Inline>
                    </TimelineBlock>
                    {project.gallery.length > 0 && (
                        <>
                            <TimelineBlock>
                                <h4>{language.dictionary.gallery}</h4>
                            </TimelineBlock>
                            <TimelineBlock>
                                <Fancybox>
                                    <Inline>
                                        {project.gallery.map((src) => (
                                            <a data-fancybox="gallery" href={src}>
                                                <img src={src} />
                                            </a>
                                        ))}
                                    </Inline>
                                </Fancybox>
                            </TimelineBlock>
                        </>
                    )}
                    <TimelineBlock>
                        <h4>Tech Stack</h4>
                    </TimelineBlock>
                    <TimelineBlock>
                        <Inline>
                            {project.techStack.map((technology) => (
                                <Tag label={technology.label}>{technology.name}</Tag>
                            ))}
                        </Inline>
                    </TimelineBlock>
                </TimelineEvent>
            ))}
        </Timeline>
    );
}
