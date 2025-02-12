import { Block } from "../components/Block";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Nav";
import { useLanguage } from "../hooks/LanguageProvider";

export function Projects() {
    const language = useLanguage();

    return (
        <>
            <Block>
                <h1>Hello, world!</h1>
            </Block>
            <Block>
                <h1>{language.dictionary.projects}</h1>
            </Block>
            <Footer />
            <Navbar alwaysScrolled />
        </>
    );
}
