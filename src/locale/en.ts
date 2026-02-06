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
            'I am 18 years old and was born in Ukraine. My family moved to Kyiv when I was 6 years old, so I grew up there. I am an introvert, so I am attentive, independent, and quiet.',
            'When I was 10 years old, I started studying software development by making small apps with Visual Basic/Python, and now I am studying Software Development at Scalda.',
            'Besides software development, I really love prog metal and prog rock music, such as Bring Me The Horizon or Unprocessed, and I play electric guitar. I also enjoy snowboarding—my family took me to the Carpathians every winter.',
            'In the future, I want to become a full-stack developer because I enjoy both back-end and front-end development.',
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
} as const;
