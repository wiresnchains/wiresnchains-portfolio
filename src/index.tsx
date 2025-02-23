import React from "react";
import ReactDOM from "react-dom/client";

import { LanguageProvider } from "./hooks/LanguageProvider";

import { App } from "./App";

import "./styles/style.scss";

(() => {
    const rootElement = document.getElementById("root");

    if (!rootElement)
        throw new Error("Element #root was not found");

    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </React.StrictMode>
    );
})();
