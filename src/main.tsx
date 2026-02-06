import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LocaleProvider } from './hooks/use-locale';

import { App } from './App';

import './styles/style.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LocaleProvider>
            <App />
        </LocaleProvider>
    </StrictMode>
);
