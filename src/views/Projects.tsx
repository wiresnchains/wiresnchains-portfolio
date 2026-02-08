import { Card, CardGallery } from '../components/Card';
import { Inline } from '../components/Inline';
import { useTranslation } from '../hooks/use-locale';

import planfond01 from '../assets/images/planfond/planfond-01.webp';
import planfond02 from '../assets/images/planfond/planfond-02.webp';
import planfond03 from '../assets/images/planfond/planfond-03.webp';
import planfond04 from '../assets/images/planfond/planfond-04.webp';
import planfond05 from '../assets/images/planfond/planfond-05.webp';
import planfond06 from '../assets/images/planfond/planfond-06.webp';
import slidehub01 from '../assets/images/slidehub/slidehub-01.webp';
import slidehub02 from '../assets/images/slidehub/slidehub-02.webp';
import slidehub03 from '../assets/images/slidehub/slidehub-03.webp';
import slidehub04 from '../assets/images/slidehub/slidehub-04.webp';
import slidehub05 from '../assets/images/slidehub/slidehub-05.webp';
import slidehub06 from '../assets/images/slidehub/slidehub-06.webp';

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
                    <CardGallery
                        images={[
                            { src: planfond01, alt: 'planfond-01' },
                            { src: planfond02, alt: 'planfond-02' },
                            { src: planfond03, alt: 'planfond-03' },
                            { src: planfond04, alt: 'planfond-04' },
                            { src: planfond05, alt: 'planfond-05' },
                            { src: planfond06, alt: 'planfond-06' },
                        ]}
                    />
                    <h3>Planfond</h3>
                    <small className="muted">2025 - {translation.common.now}</small>
                    <p>{translation.projectDescriptions.planfond}</p>
                    <a href="https://planfond.delphinity.nl" target="_blank">
                        Link
                    </a>
                </Card>

                <Card>
                    <CardGallery
                        images={[
                            { src: slidehub01, alt: 'slidehub-01' },
                            { src: slidehub02, alt: 'slidehub-02' },
                            { src: slidehub03, alt: 'slidehub-03' },
                            { src: slidehub04, alt: 'slidehub-04' },
                            { src: slidehub05, alt: 'slidehub-05' },
                            { src: slidehub06, alt: 'slidehub-06' },
                        ]}
                    />
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
