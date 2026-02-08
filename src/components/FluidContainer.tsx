import clsx from 'clsx';
import { BaseParentComponent } from '../types';
import '../styles/components/FluidContainer.scss';

export interface FluidContainerProps extends BaseParentComponent {
    center?: boolean;
}

export function FluidContainer(props: FluidContainerProps) {
    return (
        <div className={clsx('fluid-container', props.center && 'center', props.utility)}>
            <div className="content">{props.children}</div>
        </div>
    );
}
