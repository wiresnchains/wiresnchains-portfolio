import { Locale } from './interface';

export const NL: Locale = {
    common: {
        year: 'jaar',
        years: 'jaar',
        learnMore: 'Lees meer',
        june: 'Juni',
        july: 'Juli',
        august: 'Augustus',
        september: 'September',
        now: 'Heden',
    },

    hero: {
        heading: 'Danya Grachov',
        description: 'Software Developer & Student bij Scalda',
    },

    navigation: {
        contact: 'Contact',
        aboutMe: 'Over mij',
        projects: 'Projecten',
        education: 'Educatie',
        tools: 'Tools',
    },

    contantForm: {
        description: 'Stuur een e-mail aan mij',
        name: 'Naam',
        email: 'E-mail adres',
        send: 'Verzenden',
        message: 'Bericht',
        failed: 'Bericht verzenden mislukt, probeer het later opnieuw',
        sent: 'Bericht is succesvol verzonden',
        error: 'Oeps... Iets gaat mis, probeer het later opnieuw',
        emptyFields: 'Lege velden',
    },

    footer: {
        otherLinks: 'Andere links',
    },

    aboutMe: {
        heading: 'Mijn naam is Danya,',
        paragraphs: [
            'Ik ben 18 jaar oud en geboren in Oekraïne. Mijn familie verhuisde naar Kyiv toen ik 6 jaar oud was, dus daar ben ik opgegroeid. Ik ben een introvert dus ben ik aandachtig, zelfstanding en stil.',
            'Toen ik 10 jaar oud was, begon ik met het studeren van software development door kleine appjes met Visual Basic/Python en nu studeer ik Software Development bij Scalda.',
            'Naast software development hou ik veel van prog metal en prog rockmuziek, zoals Bring Me The Horizon of  Unprocessed, en speel ik elektrische gitaar. Ik snowboard ook graag – mijn familie nam me elke winter mee naar de Karpaten.',
            'In de toekomst wil ik een full-stack developer worden, omdat ik zowel van back- als front-end development leuk vind.',
        ],
    },

    projectDescriptions: {
        alcove: 'Eenvoudige CLI-tool om het hosts-bestand op je systeem te beheren',
        pocketMoney: 'Webapplicatie om je financiën te budgetteren',
        planfond: 'Webapplicatie voor het beheren van kamerreserveringen op onze school',
        slidehub: 'Web-narrowcasting systeem voor onze school',
        gta5planet: 'RPG-server voor GTA 5 multiplayer',
        endlessMines: 'RPG met oneindige mijnen generatie',
    },

    education: {
        notFinishedYet: 'Nog niet afgerond',
        notGraduatedYet: 'Nog bezig met opleiding',
        graduated: 'Diploma behaald',
        maths: 'Wiskunde',
        calculations: 'Rekenen',

        dutch: 'Nederlands',
        english: 'Engels',
        speaking: 'Spreken',
        writing: 'Schrijven',
        reading: 'Lezen',

        viewCertificate: 'Certificaat bekijken',
        viewDiploma: 'Diploma bekijken',

        scalda: {
            phases: {
                oriented: 'Fase Oriënterend',
                beginner: 'Fase Beginner',
                advanced: 'Fase Gevorderd',
            },

            database: 'Databases',
            frontend: 'Front-end',
            javaProgramming: 'Java programmeren (back-end)',
            softwareEngineering: 'Software engineering',
            scrum: 'Scrum',
            careerOrientation: 'Loopbaanorientatie',

            result: {
                good: 'Goed (behaald)',
                sufficient: 'Voldoende (behaald)',
                fail: 'Onvoldoende (niet behaald)',
            },
        },

        jamm: {
            ukrainianEvaluationSystem:
                'In Oekraïne krijgen leerlingen cijfers van 1 tot 12, waarbij 12 uitstekend is, 7 het minimum is om te slagen, en alles onder 7 een onvoldoende is.',

            ukrainianLanguage: 'Oekraïense taal',
            ukrainianLiterature: 'Oekraïense literatuur',
            foreignLiterature: 'Buitenlandse literatuur',
            history: 'Geschiedenis',
            algebra: 'Algebra',
            geometry: 'Geometrie',
            ict: 'ICT',
            geography: 'Geografie',
            biology: 'Biologie',
            physics: 'Natuurkunde',
            chemistry: 'Scheikunde',
            civicsAndLaw: 'Jurisprudentie',
            healthEducation: 'Gezondheidsvoorlichting',
            art: 'Kunst',
        },
    },
} as const;
