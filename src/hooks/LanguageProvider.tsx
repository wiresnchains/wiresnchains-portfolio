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
        cppExp: "4+ years experience",
        javaExp: "<1 year experience",
        csExp: "1+ year experience",
        luaExp: "4+ years experience",
        jsExp: "3+ years experience",
        reactExp: "<1 year experience",
        scssExp: "1+ year experience",
        tsExp: "1+ year experience",
        phpDev: "1+ year experience",
        sqlExp: "4+ years experience",
        dockerExp: "<1 year experience",
        gitExp: "2+ years experience",
        gallery: "Gallery",
        aboutMeHeading: "My name is Danya,",
        aboutMeParagraph1: `I am ${calculateYearsFrom("2007-08-13")} years old and was born in Ukraine. My family moved to Kyiv when I was 6 years old, so I grew up there. I am an introvert, so I am attentive, independent, and quiet.`,
        aboutMeParagraph2: "When I was 10 years old, I started studying software development by making small apps with Visual Basic/Python, and now I am studying Software Development at Scalda.",
        aboutMeParagraph3: "Besides software development, I really love prog metal and prog rock music, such as Bring Me The Horizon or Unprocessed, and I play electric guitar. I also enjoy snowboarding—my family took me to the Carpathians every winter.",
        aboutMeParagraph4: "In the future, I want to become a full-stack developer because I enjoy both back-end and front-end development.",
        viewGallery: "View gallery",

        // Projects
        v9desc: "My own interpreted scripting language designed for static & strict typing",
        emDesc: "RPG game with infinite mine generation",
        auroraDesc: "An RPG game server in GTA 5 multiplayer",
        waveDesc: "Lightweight library for frontend state management",

        // Navigation
        education: "Education",
        tools: "Tools",
        portfolio: "Portfolio"
    },

    NL: {
        // Text
        heading: "Danya Grachov",
        description: "Software Developer & Student bij Scalda",
        contact: "Contact",
        aboutMe: "Over mij",
        contactDescription: "Stuur me een e-mail",
        name: "Naam",
        email: "E-mail",
        send: "Verzenden",
        message: "Bericht",
        failedToSendMessage: "Bericht verzenden mislukt, probeer het later opnieuw",
        messageSent: "Bericht is succesvol verzonden",
        emptyFields: "Lege velden",
        projects: "Projecten",
        otherLinks: "Andere links",
        cppExp: "4+ jaar ervaring",
        javaExp: "<1 jaar  ervaring",
        csExp: "1+ jaar ervaring",
        luaExp: "4+ jaar ervaring",
        jsExp: "3+ jaar ervaring",
        reactExp: "<1+ jaar ervaring",
        scssExp: "1+ jaar ervaring",
        tsExp: "1+ jaar ervaring",
        phpDev: "1+ jaar ervaring",
        sqlExp: "4+ jaar ervaring",
        dockerExp: "<1 jaar  ervaring",
        gitExp: "2+ jaar ervaring",
        gallery: "Galerij",
        aboutMeHeading: "Mijn naam is Danya,",
        aboutMeParagraph1: `Ik ben ${calculateYearsFrom("2007-08-13")} jaar oud en geboren in Oekraïne. Mijn familie verhuisde naar Kyiv toen ik 6 jaar oud was, dus daar ben ik opgegroeid. Ik ben een introvert dus ben ik aandachtig, zelfstanding en stil.`,
        aboutMeParagraph2: "Toen ik 10 jaar oud was, begon ik met het studeren van software development door kleine appjes met Visual Basic/Python en nu studeer ik Software Development bij Scalda.",
        aboutMeParagraph3: "Naast software development hou ik veel van prog metal en prog rockmuziek, zoals Bring Me The Horizon of  Unprocessed, en speel ik elektrische gitaar. Ik snowboard ook graag – mijn familie nam me elke winter mee naar de Karpaten.",
        aboutMeParagraph4: "In de toekomst wil ik een full-stack developer worden, omdat ik zowel van back- als front-end development leuk vind.",
        viewGallery: "Gallerij bekijken",

        // Projects
        v9desc: "Mijn eigen geïnterpreteerde scripttaal, ontworpen voor statische en strikte typecontrole",
        emDesc: "RPG-spel met oneindige mijnbouwgeneratie",
        auroraDesc: "Een RPG-game server in GTA 5 multiplayer",
        waveDesc: "Licht bibliotheek voor frontend state management",

        // Navigation
        education: "Educatie",
        tools: "Tools",
        portfolio: "Portfolio"
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
