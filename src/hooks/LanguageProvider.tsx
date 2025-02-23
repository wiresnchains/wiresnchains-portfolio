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

        // Navigation
        education: "Education",
        experience: "Experience",
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

        // Navigation
        education: "Educatie",
        experience: "Ervaring",
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
