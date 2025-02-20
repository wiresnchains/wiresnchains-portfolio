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
        name: "Name",
        email: "E-mail",
        send: "Send",
        message: "Message",
        failedToSendMessage: "Failed to send message, please try again later",
        messageSent: "Message was sent successfully",
        emptyFields: "Empty fields",
        projects: "Projects",
        otherLinks: "Other links",
        cppExp: "4 years+ experience",
        javaExp: "<1 year experience",
        csExp: "1 year+ experience",
        luaExp: "4 years+ experience",
        jsExp: "3 years+ experience",
        reactExp: "<1 year experience",
        scssExp: "1 year+ experience",
        tsExp: "1 year+ experience",
        phpDev: "1 year+ experience",
        sqlExp: "4 years+ experience",
        dockerExp: "<1 year experience",
        gitExp: "2 years+ experience",
        aboutMePart1: `My name is Danya, I am ${calculateYearsFrom("2007-08-13")} years old, and I was born in Ukraine. My family moved to Kyiv when I was 6 years old, so that’s where I grew up. I am an introvert, so I am attentive, independent, and quiet.`,
        aboutMePart2: "When I was 10 years old, I started studying software development by creating small apps with Visual Basic/Python, and now I am studying Software Development at Scalda.",
        aboutMePart3: "Besides software development, I really love prog metal and prog rock music, like Bring Me The Horizon or Unprocessed, and I play electric guitar. I also enjoy snowboarding - we used to go to the Carpathian mountains almost every winter with my family.",
        aboutMePart4: "In the future, I want to become a full-stack developer because I enjoy both back-end and front-end development.",
        finalforumDesc: "A forum engine with registration, posts, categories, automatic database setup and admin panel",
        emDesc: "An RPG game on Roblox with multiple progression paths",
        waveDesc: "A JavaScript library for front-end development with a state manager",
        auroraDesc: "An RPG game server in GTA 5 Multiplayer using NodeJS, TypeScript & my library Wave.js",
        fusionDesc: "A C++ Game engine for 2D/3D rendering using SDL2 + OpenGL",
        v9desc: "My own interpreted scripting language designed for static & strict typing",
        wncDesc: "",
        portfolioDesc: "My personal portfolio page",
        pageNotFound: "Page not found",
        error: "Something went wrong...",
        backHome: "Back home",
        passed: "Passed",
        lbs: "LBS (Career management)",
        isk: "ISK (International Dutch School)",
        classesAndResults: "Classes & results",
        speaking: "Speaking",
        listening: "Listening",
        writing: "Speaking",
        maths: "Maths",

        // Navigation
        home: "Home",
        education: "Education",
        experience: "Experience",

        // Languages
        language: "Language"
    },

    NL: {
        // Text
        heading: "Danya Grachov",
        description: "Software Developer & Student bij Scalda",
        contact: "Contact",
        aboutMe: "Over mij",
        contactDescription: "Stuur een e-mail aan mij",
        name: "Naam",
        email: "E-mail",
        send: "Stuur",
        message: "Uw bericht",
        failedToSendMessage: "Het bericht kon niet worden verzonden, probeer het later opnieuw",
        messageSent: "Het bericht is succesvol verzonden",
        emptyFields: "Lege velden",
        projects: "Projecten",
        otherLinks: "Andere linken",
        cppExp: "4 jaar+ ervaring",
        javaExp: "<1 jaar ervaring",
        csExp: "1 jaar+ ervaring",
        luaExp: "4 jaar+ ervaring",
        jsExp: "3 jaar+ ervaring",
        reactExp: "<1 jaar ervaring",
        scssExp: "1 jaar+ ervaring",
        tsExp: "1 jaar+ ervaring",
        phpDev: "1 jaar+ ervaring",
        sqlExp: "4 jaar+ ervaring",
        dockerExp: "<1 jaar ervaring",
        gitExp: "2 jaar+ ervaring",
        aboutMePart1: `Mijn naam is Danya, ik ben ${calculateYearsFrom("2007-08-13")} jaar oud en geboren in Oekraïne. Mijn familie verhuisde naar Kyiv toen ik 6 jaar oud was, dus daar ben ik opgegroeid. Ik ben een introvert dus ben ik aandachtig, zelfstanding en stil.`,
        aboutMePart2: "Toen ik 10 jaar oud was, begon ik met het studeren van software development door kleine appjes met Visual Basic/Python en nu studeer ik Software Development bij Scalda.",
        aboutMePart3: "Naast software development hou ik veel van prog metal en prog rockmuziek, zoals Bring Me The Horizon of Unprocessed, en speel ik elektrische gitaar. Ik snowboard ook graag – mijn familie nam me elke winter mee naar de Karpaten.",
        aboutMePart4: "In de toekomst wil ik een full-stack developer worden, omdat ik zowel van back- als front-end development leuk vindt.",
        finalforumDesc: "Een forumengine met registratie, berichten, categorieën, automatische databaseconfiguratie en een beheerderspaneel",
        emDesc: "Een RPG-spel op Roblox met meerdere progressiepaden",
        waveDesc: "Een JavaScript-bibliotheek voor front-end ontwikkeling met een toestandsbeheerder",
        auroraDesc: "Een RPG-gameserver in GTA 5 Multiplayer met NodeJS, TypeScript & mijn library Wave.js",
        fusionDesc: "Een C++ game engine voor 2D/3D-rendering met SDL2 + OpenGL",
        v9desc: "Mijn eigen geïnterpreteerde scripttaal, ontworpen voor statische en strikte types",
        wncDesc: "",
        portfolioDesc: "Mijn eigen portfolio",
        pageNotFound: "Pagina niet gevonden",
        error: "Er is iets misgegaan...",
        backHome: "Terug naar index",
        passed: "Behaald",
        lbs: "LBS (Loopbaansturing)",
        isk: "ISK (Internationale schakelklas)",
        classesAndResults: "Vakken & cijfers",
        speaking: "Spreken",
        listening: "Luisteren",
        writing: "Schrijven",
        maths: "Rekenen & Wiskunde",

        // Navigation
        home: "Index",
        education: "Educatie",
        experience: "Ervaring",

        // Languages
        language: "Taal"
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
