import clsx from 'clsx';
import { BaseParentComponent } from '../types';
import '../styles/components/alert.scss';

export interface AlertProps extends BaseParentComponent {
    type: 'success' | 'error';
}

export function Alert(props: AlertProps) {
    return <span className={clsx('alert', `alert-${props.type}`, props.utility)}>{props.children}</span>;
}
