import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LanguageProvider } from "./hooks/LanguageProvider";

import { App } from "./App";

import "./styles/style.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </StrictMode>
);
