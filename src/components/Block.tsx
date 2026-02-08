import clsx from 'clsx';
import { forwardRef } from 'react';
import { BaseParentComponent } from '../types';
import '../styles/components/block.scss';

export const Block = forwardRef<HTMLElement, BaseParentComponent>((props, ref) => (
    <section className={clsx('block', props.utility)} ref={ref}>
        {props.children}
    </section>
));

export function BlockTitle(props: BaseParentComponent) {
    return <h2 className={clsx('block-title', props.utility)}>{props.children}</h2>;
}
