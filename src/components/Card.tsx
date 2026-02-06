import { ReactNode } from 'react';

import { Fancybox } from './Fancybox';
import { Button } from './Form';

import { useTranslation } from '../hooks/use-locale';

import '../styles/components/Card.scss';

interface CardProps {
    children?: ReactNode;
}

export function Card(props: CardProps) {
    return <div className="card">{props.children}</div>;
}

interface GalleryImage {
    src: string;
    alt: string;
}

interface CardGalleryProps {
    images: Array<GalleryImage>;
}

export function CardGallery(props: CardGalleryProps) {
    const translation = useTranslation();

    return (
        <div className="card-gallery">
            <Fancybox>
                {props.images.map((image, i) => (
                    <a data-fancybox="gallery" href={image.src} key={image.src}>
                        <img src={image.src} alt={image.alt} style={{ display: i == 0 ? 'block' : 'none' }} />
                    </a>
                ))}
            </Fancybox>
            <div className="hover">
                <Button type="primary">{translation.common.learnMore}</Button>
            </div>
        </div>
    );
}
