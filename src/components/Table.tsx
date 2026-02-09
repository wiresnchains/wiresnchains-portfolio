import clsx from 'clsx';
import { BaseParentComponent } from '../types';
import '../styles/components/Table.scss';

export function Table(props: BaseParentComponent) {
    return (
        <div className={clsx('table-container', props.utility)}>
            <table className={clsx('table', props.utility)}>{props.children}</table>
        </div>
    );
}

export function TableRow(props: BaseParentComponent) {
    return <tr className={clsx('table-row', props.utility)}>{props.children}</tr>;
}

export function TableHeader(props: BaseParentComponent) {
    return <th className={clsx('table-header', props.utility)}>{props.children}</th>;
}

export function TableData(props: BaseParentComponent) {
    return <td className={clsx('table-data', props.utility)}>{props.children}</td>;
}
