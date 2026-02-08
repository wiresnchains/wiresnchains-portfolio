import { Locale } from './interface';

export const EN: Locale = {
    common: {
        year: 'year',
        years: 'years',
        learnMore: 'Learn more',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        now: 'Now',
    },

    hero: {
        heading: 'Danya Grachov',
        description: 'Software Developer & Student at Scalda',
    },

    navigation: {
        contact: 'Contact',
        aboutMe: 'About me',
        projects: 'Projects',
        education: 'Education',
        tools: 'Tools',
    },

    contantForm: {
        description: 'Send me a message!',
        name: 'Name',
        email: 'E-mail address',
        send: 'Send',
        message: 'Message',
        failed: 'Failed to send message, please try again later',
        sent: 'Message was sent successfully',
        error: 'Oops... Something went wrong',
        emptyFields: 'Empty fields',
    },

    footer: {
        otherLinks: 'Other links',
    },

    aboutMe: {
        heading: 'My name is Danya,',
        paragraphs: [
            'I am 18 years old and was born in Ukraine. My family moved to Kyiv when I was 6 years old, so I grew up there. I am a young, driven software developer.',
            'When I was 10 years old, I started studying software development by making small apps with Visual Basic/Python, and now I am studying Software Development at Scalda.',
            'Besides software development, I play guitar, love listening, making music and snowboarding.',
            "I also like graphic design, I used to study it when I was younger, that's why I have a preference for front-end development, but I enjoy both back- and front-end development.",
            'In the future, I want to become a full-stack developer.',
        ],
    },

    projectDescriptions: {
        alcove: 'Simple CLI tool to manage the hosts file on your system',
        pocketMoney: 'Web-application for budgeting your finances',
        planfond: 'Web-application for managing room reservations at our college',
        slidehub: 'Web-narrowcasting system for our college',
        gta5planet: 'RPG-server for GTA 5 multiplayer',
        endlessMines: 'RPG with infinite mine generation',
    },

    education: {
        notFinishedYet: 'Not finished yet',
        notGraduatedYet: 'Currently enrolled',
        graduated: 'Graduated',

        maths: 'Maths',
        calculations: 'Calculations',

        dutch: 'Dutch',
        english: 'English',
        speaking: 'Speaking',
        writing: 'Writing',
        reading: 'Reading',

        viewCertificate: 'View certificate',
        viewDiploma: 'View diploma',

        scalda: {
            phases: {
                oriented: 'Oriented Phase',
                beginner: 'Beginner Phase',
                advanced: 'Advanced Phase',
            },

            database: 'Databases',
            frontend: 'Front-end',
            javaProgramming: 'Java Programming (back-end)',
            softwareEngineering: 'Software engineering',
            scrum: 'Scrum',
            careerOrientation: 'Career orientation',

            result: {
                good: 'Good (passed)',
                sufficient: 'Sufficient (passed)',
                fail: 'Failed',
            },
        },

        jamm: {
            ukrainianEvaluationSystem:
                'In Ukraine, students are graded on a 12-point scale, with 12 being excellent, 7 the minimum passing mark, and anything below 7 considered a fail.',

            ukrainianLanguage: 'Ukrainian language',
            ukrainianLiterature: 'Ukrainian literature',
            foreignLiterature: 'Foreign literature',
            history: 'History',
            algebra: 'Algebra',
            geometry: 'Geomtry',
            ict: 'ICT',
            geography: 'Geography',
            biology: 'Biology',
            physics: 'Physics',
            chemistry: 'Chemistry',
            civicsAndLaw: 'Civics/Law',
            healthEducation: 'Health education',
            art: 'Art',
        },
    },
} as const;
