import { useState, createContext, ReactNode, useContext } from "react";

interface ILanguageDictionary {
    [key: string]: string;
}

const dictionaryList: { [key: string]: ILanguageDictionary } = {
    EN: {
        // Text
        heading: "Danya Grachov",
        description: "Software Developer & Student at Scalda",
        contact: "Contact",
        aboutMe: "About me",
        contactDescription: "Send me an email",
        firstName: "Name",
        lastName: "Surname",
        email: "E-mail",
        send: "Send",
        message: "Message",
        failedToSendMessage: "Failed to send message, please try again later",
        messageSent: "Message was sent successfully",
        emptyFields: "Empty fields",
        projects: "Projects",
        desktopDev: "Desktop/Game Development",
        webDev: "Web Development",
        tools: "Tools",
        otherLinks: "Other links",

        // Navigation
        home: "Home",
        experience: "Experience",

        // Languages
        language: "Language",
        english: "English",
        dutch: "Dutch"
    },

    NL: {
        // Text
        heading: "Danya Grachov",
        description: "Software Developer & Student bij Scalda",
        contact: "Contact",
        aboutMe: "Over mij",
        contactDescription: "Stuur een e-mail aan mij",
        firstName: "Voornaam",
        lastName: "Achternaam",
        email: "E-mail",
        send: "Stuur",
        message: "Uw bericht",
        failedToSendMessage: "Het bericht kon niet worden verzonden, probeer het later opnieuw",
        messageSent: "Het bericht is succesvol verzonden",
        emptyFields: "Lege velden",
        projects: "Projecten",
        desktopDev: "Desktop Applicaties/Game Ontwikkeling",
        webDev: "Web Ontwikkeling",
        tools: "Hulpmiddelen",
        otherLinks: "Andere linken",

        // Navigation
        home: "Index",
        experience: "Ervaring",

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
