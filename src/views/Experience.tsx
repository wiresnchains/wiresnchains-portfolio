import { Inline } from "../components/Inline";
import { Tag } from "../components/Tag";
import { useLanguage } from "../hooks/LanguageProvider";

export function Experience() {
    const language = useLanguage();
    
    return (
        <Inline center>
            <Tag label={language.dictionary.cppExp}>C++</Tag>
            <Tag label={language.dictionary.csExp}>C#</Tag>
            <Tag label={language.dictionary.javaExp}>Java</Tag>
            <Tag label={language.dictionary.luaExp}>Lua/Luau</Tag>
            <Tag label={language.dictionary.jsExp}>NodeJS</Tag>
            <Tag label={language.dictionary.reactExp}>React</Tag>
            <Tag label={language.dictionary.scssExp}>SCSS</Tag>
            <Tag label={language.dictionary.tsExp}>TypeScript</Tag>
            <Tag label={language.dictionary.phpDev}>PHP</Tag>
            <Tag label={language.dictionary.sqlExp}>SQL (MySQL)</Tag>
            <Tag label={language.dictionary.dockerExp}>Docker</Tag>
            <Tag label={language.dictionary.gitExp}>Git</Tag>
        </Inline>
    );
}
