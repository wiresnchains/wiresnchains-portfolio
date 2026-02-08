import clsx from 'clsx';
import { Fancybox } from './Fancybox';
import { Button } from './Form';
import { useTranslation } from '../hooks/use-locale';
import { BaseParentComponent } from '../types';
import '../styles/components/Card.scss';

export function Card(props: BaseParentComponent) {
    return <div className={clsx('card', props.utility)}>{props.children}</div>;
}

export interface GalleryImage {
    src: string;
    alt: string;
}

export interface CardGalleryProps extends BaseParentComponent {
    images: Array<GalleryImage>;
}

export function CardGallery(props: CardGalleryProps) {
    const translation = useTranslation();

    return (
        <div className={clsx('card-gallery', props.utility)}>
            <Fancybox>
                {props.images.map((image, i) => (
                    <a data-fancybox="gallery" href={image.src} key={image.src}>
                        {i === 0 && <img src={image.src} alt={image.alt} loading="lazy" />}
                    </a>
                ))}
            </Fancybox>
            <div className="hover">
                <Button type="primary">{translation.common.learnMore}</Button>
            </div>
        </div>
    );
}
