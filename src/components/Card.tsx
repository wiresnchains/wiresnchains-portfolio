import { ReactNode } from "react";

import { Fancybox } from "./Fancybox";
import { Button } from "./Form";

import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Card.scss";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export function CardGallery({ images }: { images: Array<{ src: string, alt: string }> }) {
    const language = useLanguage();

    return (
        <div className="card-gallery">
            <Fancybox>
                {images.map((image, i) => <a data-fancybox="gallery" href={image.src} key={image.src}>
                    <img src={image.src} alt={image.alt} style={{ display: i == 0 ? "block" : "none" }} />
                </a>)}
            </Fancybox>
            <div className="hover">
                <Button type="primary">{language.dictionary.viewGallery}</Button>
            </div>
        </div>
    );
}
