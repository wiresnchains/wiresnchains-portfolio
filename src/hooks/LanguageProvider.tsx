import { useState, createContext, ReactNode, useContext } from "react";

interface ILanguageDictionary {
    [key: string]: string;
}

function calculateYearsFrom(dateString: string) {
    const startDate = new Date(dateString);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    const monthDifference = currentDate.getMonth() - startDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < startDate.getDate())) {
        years--;
    }

    return years;
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
        otherLinks: "Other links",
        desktopDev: "Desktop/Game Development",
        gameDev: "Game Development",
        webDev: "Web Development",
        backendDev: "Backend Development",
        prodEnv: "Production Environment",
        vcs: "Version Control",
        aboutMeText: `I am ${calculateYearsFrom("2007-08-13")} years old`,
        finalforumDesc: "A forum engine with registration, posts, categories, automatic database setup and admin panel",
        emDesc: "An RPG game on Roblox with multiple progression paths",
        waveDesc: "A JavaScript library for front-end development with a state manager",
        auroraDesc: "An RPG game server in GTA 5 Multiplayer using NodeJS + TypeScript (and wave.js for frontend)",
        fusionDesc: "A C++ Game engine for 2D/3D rendering using SDL2 + OpenGL",
        v9desc: "My own interpreted scripting language designed for static & strict typing",

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
        otherLinks: "Andere linken",
        desktopDev: "Desktop/Game Ontwikkeling",
        gameDev: "Game Ontwikkeling",
        webDev: "Web Ontwikkeling",
        backendDev: "Backend Ontwikkeling",
        prodEnv: "Production Omgeving",
        vcs: "Versie Control",
        aboutMeText: `Ik ben ${calculateYearsFrom("2007-08-13")} jaar oud`,
        finalforumDesc: "Een forumengine met registratie, berichten, categorieën, automatische databaseconfiguratie en een beheerderspaneel",
        emDesc: "Een RPG-spel op Roblox met meerdere progressiepaden",
        waveDesc: "Een JavaScript-bibliotheek voor front-end ontwikkeling met een toestandsbeheerder",
        auroraDesc: "Een RPG-gameserver in GTA 5 Multiplayer met NodeJS + TypeScript (en wave.js voor de frontend)",
        fusionDesc: "Een C++ game engine voor 2D/3D-rendering met SDL2 + OpenGL",
        v9desc: "Mijn eigen geïnterpreteerde scripttaal, ontworpen voor statische en strikte types",

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
