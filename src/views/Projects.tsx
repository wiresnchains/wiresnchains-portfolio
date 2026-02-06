import { Card } from '../components/Card';
import { Inline } from '../components/Inline';
import { useTranslation } from '../hooks/use-locale';

export function Projects() {
    const translation = useTranslation();

    return (
        <>
            <Inline center>
                <Card>
                    <h3>Alcove</h3>
                    <small className="muted">2026 - {translation.common.now}</small>
                    <p>{translation.projectDescriptions.alcove}</p>
                    <a href="https://github.com/wiresnchains/alcove" target="_blank">
                        GitHub
                    </a>
                </Card>

                <Card>
                    <h3>PocketMoney</h3>
                    <small className="muted">2025 - {translation.common.now}</small>
                    <p>{translation.projectDescriptions.pocketMoney}</p>
                    <a href="https://app.getpocketmoney.co" target="_blank">
                        Link
                    </a>
                </Card>

                <Card>
                    <h3>Planfond</h3>
                    <small className="muted">2025 - {translation.common.now}</small>
                    <p>{translation.projectDescriptions.planfond}</p>
                    <a href="https://planfond.delphinity.nl" target="_blank">
                        Link
                    </a>
                </Card>

                <Card>
                    <h3>Slidehub</h3>
                    <small className="muted">2025</small>
                    <p>{translation.projectDescriptions.slidehub}</p>
                </Card>

                <Card>
                    <h3>gta5planet</h3>
                    <small className="muted">2021 - {translation.common.now}</small>
                    <p>{translation.projectDescriptions.gta5planet}</p>
                    <a href="https://gta5planet.com" target="_blank">
                        Link
                    </a>
                </Card>

                <Card>
                    <h3>Endless Mines</h3>
                    <small className="muted">2022 - 2024</small>
                    <p>{translation.projectDescriptions.endlessMines}</p>
                    <a href="https://www.roblox.com/games/8898754223" target="_blank">
                        Link
                    </a>
                </Card>
            </Inline>
        </>
    );
}
