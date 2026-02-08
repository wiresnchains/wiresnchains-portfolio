import clsx from 'clsx';
import { BaseParentComponent } from '../types';
import '../styles/components/Tag.scss';

export interface TagProps extends BaseParentComponent {
    label: string;
}

export function Tag(props: TagProps) {
    return (
        <span className={clsx('tag', props.utility)}>
            <span className="label">{props.label}</span>
            {props.children}
        </span>
    );
}
