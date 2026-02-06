import { Inline } from '../components/Inline';
import { Tag } from '../components/Tag';
import { useTranslation } from '../hooks/use-locale';

export function Experience() {
    const translation = useTranslation();

    return (
        <Inline center>
            <Tag label={`<1 ${translation.common.year}`}>Go</Tag>
            <Tag label={`3+ ${translation.common.year}`}>C++</Tag>
            <Tag label={`<1 ${translation.common.year}`}>C#</Tag>
            <Tag label={`2+ ${translation.common.year}`}>Java</Tag>
            <Tag label={`4+ ${translation.common.year}`}>Lua/Luau</Tag>
            <Tag label={`<1 ${translation.common.year}`}>PHP</Tag>
            <Tag label={`3+ ${translation.common.year}`}>NodeJS</Tag>
            <Tag label={`2+ ${translation.common.year}`}>TypeScript</Tag>
            <Tag label={`1+ ${translation.common.year}`}>React</Tag>
            <Tag label={`1+ ${translation.common.year}`}>SCSS</Tag>
            <Tag label={`1+ ${translation.common.year}`}>Docker</Tag>
            <Tag label={`3+ ${translation.common.year}`}>Git</Tag>
            <Tag label={`<1 ${translation.common.year}`}>Linux</Tag>
            <Tag label={`2+ ${translation.common.year}`}>MySQL</Tag>
        </Inline>
    );
}
