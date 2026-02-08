import { ReactNode } from 'react';

export interface BaseComponent {
    utility?: string;
}

export interface BaseParentComponent extends BaseComponent {
    children?: ReactNode;
}
