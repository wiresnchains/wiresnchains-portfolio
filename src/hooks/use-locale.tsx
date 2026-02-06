import { createContext, useContext, useState } from 'react';
import { translation } from '../locale';
import type { BaseParentComponent } from '../types';

export type LocaleKey = keyof typeof translation;

export interface LocaleContext {
    localeKey: LocaleKey;
    setLocaleKey(localeKey: LocaleKey): void;
}

const localeContext = createContext<LocaleContext | undefined>(undefined);

export function LocaleProvider(props: BaseParentComponent) {
    const [localeKey, setLocaleKey] = useState<LocaleKey>('EN');

    const ctx = {
        localeKey,
        setLocaleKey,
    };

    return <localeContext.Provider value={ctx}>{props.children}</localeContext.Provider>;
}

export function useTranslation() {
    const ctx = useContext(localeContext);

    if (!ctx) {
        throw new Error('LocaleContext was not provided');
    }

    return translation[ctx.localeKey];
}

export function useSetLocale() {
    const ctx = useContext(localeContext);

    if (!ctx) {
        throw new Error('LocaleContext was not provided');
    }

    return ctx.setLocaleKey;
}
