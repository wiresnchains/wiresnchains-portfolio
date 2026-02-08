import { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';
import { BaseParentComponent } from '../types';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export interface FancyboxProps extends BaseParentComponent {
    delegate?: string;
    options?: Partial<OptionsType>;
}

export function Fancybox(props: FancyboxProps) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <div ref={containerRef} className={props.utility}>
            {props.children}
        </div>
    );
}
