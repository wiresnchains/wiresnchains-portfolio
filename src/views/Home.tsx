import { useContext } from "react";
import { LanguageContext } from "../hooks/LanguageProvider";

export function Home() {
    const language = useContext(LanguageContext);

    if (!language)
        throw new Error("LanguageContext is not provided");

    return (
        <div>
            <h1>Home</h1>
            <p>{language.dictionary.greeting}</p>
            <button onClick={() => language.setUserLanguage("EN")}>EN</button>
            <button onClick={() => language.setUserLanguage("NL")}>NL</button>
        </div>
    );
}
