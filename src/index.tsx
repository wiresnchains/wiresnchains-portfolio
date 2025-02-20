import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LanguageProvider } from "./hooks/LanguageProvider";

import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { Educatie } from "./views/Education";
import { ErrorPage } from "./views/ErrorPage";

import "./styles/style.scss";

(() => {
    const rootElement = document.getElementById("root");

    if (!rootElement)
        throw new Error("Element #root was not found");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: "/projects",
            element: <Projects />,
            errorElement: <ErrorPage />
        },
        {
            path: "/education",
            element: <Educatie />,
            errorElement: <ErrorPage />
        }
    ]);

    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <LanguageProvider>
                <RouterProvider router={router} />
            </LanguageProvider>
        </React.StrictMode>
    );
})();
