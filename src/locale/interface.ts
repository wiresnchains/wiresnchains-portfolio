export interface Locale {
    common: {
        year: string;
        years: string;
        learnMore: string;
        june: string;
        july: string;
        august: string;
        september: string;
        now: string;
    };

    hero: {
        heading: string;
        description: string;
    };

    navigation: {
        contact: string;
        aboutMe: string;
        projects: string;
        education: string;
        tools: string;
    };

    contantForm: {
        description: string;
        name: string;
        email: string;
        send: string;
        message: string;
        failed: string;
        sent: string;
        error: string;
        emptyFields: string;
    };

    footer: {
        otherLinks: string;
    };

    aboutMe: {
        heading: string;
        paragraphs: string[];
    };

    projectDescriptions: {
        alcove: string;
        pocketMoney: string;
        planfond: string;
        slidehub: string;
        gta5planet: string;
        endlessMines: string;
    };

    education: {
        notFinishedYet: string;
        notGraduatedYet: string;
        graduated: string;

        maths: string;
        calculations: string;

        dutch: string;
        english: string;
        speaking: string;
        writing: string;
        reading: string;

        viewCertificate: string;
        viewDiploma: string;

        scalda: {
            phases: {
                oriented: string;
                beginner: string;
                advanced: string;
            };

            database: string;
            frontend: string;
            javaProgramming: string;
            softwareEngineering: string;
            scrum: string;
            careerOrientation: string;

            result: {
                good: string;
                sufficient: string;
                fail: string;
            };
        };

        jamm: {
            ukrainianEvaluationSystem: string;
            ukrainianLanguage: string;
            ukrainianLiterature: string;
            foreignLiterature: string;
            history: string;
            algebra: string;
            geometry: string;
            ict: string;
            geography: string;
            biology: string;
            physics: string;
            chemistry: string;
            civicsAndLaw: string;
            healthEducation: string;
            art: string;
        };
    };
}
