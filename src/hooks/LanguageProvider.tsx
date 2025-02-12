import { useState, createContext, ReactNode, useContext } from "react";

interface ILanguageDictionary {
    [key: string]: string;
}

const dictionaryList: { [key: string]: ILanguageDictionary } = {
    EN: {
        // Text
        greeting: "Hello, World!",

        // Navigation
        home: "Home",

        // Languages
        language: "Language",
        english: "English",
        dutch: "Dutch"
    },

    NL: {
        // Text
        greeting: "Hallo, Wereld!",

        // Navigation
        home: "Index",

        // Languages
        language: "Taal",
        english: "Engels",
        dutch: "Nederlands"
    }
}

interface ILanguageContext {
    userLanguage: string;
    dictionary: ILanguageDictionary;
    setUserLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export function useLanguage() {
    const language = useContext(LanguageContext);

    if (!language)
        throw new Error("useLanguage must be used within a LanguageProvider");

    return language;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [userLanguage, setUserLanguage] = useState("EN");

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        setUserLanguage
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}
