import { Block } from "../components/Block";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Nav";
import { useLanguage } from "../hooks/LanguageProvider";

export function Projects() {
    const language = useLanguage();

    return (
        <>
            <Navbar alwaysScrolled />
            <Block>
                <h1>{language.dictionary.projects}</h1>
            </Block>
            <Footer />
        </>
    );
}
