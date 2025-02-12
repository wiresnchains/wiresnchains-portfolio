import { useState, createContext, ReactNode } from "react";

interface ILanguageDictionary {
    [key: string]: string;
}

const dictionaryList: { [key: string]: ILanguageDictionary } = {
    EN: {
        greeting: "Hello, world!"
    },

    NL: {
        greeting: "Hallo, wereld!"
    }
}

interface ILanguageContext {
    userLanguage: string;
    dictionary: ILanguageDictionary;
    setUserLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

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
