import { Helmet } from "react-helmet";
import { Block } from "../components/Block";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Nav";
import { useLanguage } from "../hooks/LanguageProvider";

export function Hobbies() {
    const language = useLanguage();
    
    return (
        <>
        <Helmet>
            <title>{language.dictionary.heading} - {language.dictionary.hobbies}</title>
        </Helmet>
            <Navbar alwaysScrolled />
            <Block>
                <h1>{language.dictionary.hobbies}</h1>
            </Block>
            <Footer fixed />
        </>
    );
}
