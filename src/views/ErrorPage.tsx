import { Helmet } from "react-helmet";

import { Navbar } from "../components/Nav";
import { Footer } from "../components/Footer";

import { useLanguage } from "../hooks/LanguageProvider";
import { Block } from "../components/Block";
import { Inline } from "../components/Inline";
import { Button } from "../components/Form";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
    const language = useLanguage();
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>{language.dictionary.heading} - {language.dictionary.pageNotFound}</title>
            </Helmet>
            <Navbar alwaysScrolled />
            <Block>
                <h1>{language.dictionary.pageNotFound}</h1>
                <p className="muted">{language.dictionary.error}</p>
                <br />
                <Inline center>
                    <Button type="primary" onClick={() => navigate("/")}>{language.dictionary.backHome}</Button>
                </Inline>
            </Block>
            <Footer fixed />
        </>
    );
}
