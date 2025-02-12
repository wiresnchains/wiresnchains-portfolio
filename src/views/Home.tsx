import { useLanguage } from "../hooks/LanguageProvider";
import { Navbar } from "../components/Nav";

export function Home() {
    const language = useLanguage();

    return (
        <>
            <Navbar />
            <h1>Home</h1>
            <p>{language.dictionary.greeting}</p>
        </>
    );
}
