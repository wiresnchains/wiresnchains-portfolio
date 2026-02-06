import { Locale } from './interface';

export const NL: Locale = {
    common: {
        year: '',
        learnMore: '',
        june: '',
        july: '',
        august: '',
        september: '',
        now: '',
    },

    hero: {
        heading: '',
        description: '',
    },

    navigation: {
        contact: '',
        aboutMe: '',
        projects: '',
        education: '',
        tools: '',
        portfolio: '',
    },

    contantForm: {
        description: '',
        name: '',
        email: '',
        send: '',
        message: '',
        failed: '',
        sent: '',
        error: '',
        emptyFields: '',
    },

    footer: {
        otherLinks: '',
    },

    aboutMe: {
        heading: '',
        paragraphs: [],
    },

    projectDescriptions: {
        alcove: '',
        pocketMoney: '',
        planfond: '',
        slidehub: '',
        gta5planet: '',
        endlessMines: '',
    },
} as const;
