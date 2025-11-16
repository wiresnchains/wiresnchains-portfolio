import { useRef, useEffect, ReactNode } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
    delegate?: string,
    options?: Partial<OptionsType>,
    children?: ReactNode;
}

export function Fancybox(props: FancyboxProps) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}
