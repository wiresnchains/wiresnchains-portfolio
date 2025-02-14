import { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler, ReactNode, useState } from "react";

import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Form.scss";
import { Alert } from "./Alert";

export function Form({ children }: { children: ReactNode }) {
    return (
        <div className="form">
            {children}
        </div>
    );
}

export function FormRow({ children }: { children: ReactNode }) {
    return (
        <div className="form-row">
            {children}
        </div>
    );
}

export function Button({ type, onClick, children }: { type: "primary" | "secondary", onClick?: MouseEventHandler<HTMLButtonElement>, children: ReactNode }) {
    return (
        <button className={"btn btn-" + type} onClick={onClick}>
            {children}
        </button>
    );
}

export function Input({ id, type, placeholder, onChange }: { id?: string, type?: HTMLInputTypeAttribute, placeholder?: string, onChange?: ChangeEventHandler<HTMLInputElement> }) {
    return (
        <input className="textbox" id={id} type={type} placeholder={placeholder} onChange={onChange} />
    )
}

export function Textarea({ id, placeholder, onChange }: { id?: string, placeholder?: string, onChange?: ChangeEventHandler<HTMLTextAreaElement>  }) {
    return (
        <textarea className="textbox" id={id} placeholder={placeholder} onChange={onChange} />
    )
}

export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const language = useLanguage();

    return (
        <Form>
            <FormRow>
                <Input type="text" placeholder={language.dictionary.name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" placeholder={language.dictionary.email} onChange={(e) => setEmail(e.target.value)}  />
            </FormRow>
            <FormRow>
                <Textarea placeholder={language.dictionary.message} onChange={(e) => setMessage(e.target.value)}  />
            </FormRow>
            <FormRow>
                <Button type="primary" onClick={async () => {
                    if (!name || !email || !message) {
                        setError(language.dictionary.emptyFields);
                        return;
                    }

                    try {
                        let payload = {
                            embeds: [
                                {
                                    title: "Contact Form",
                                    timestamp: new Date().toISOString(),
                                    fields: [
                                        {
                                            name: "Name",
                                            value: name,
                                            inline: true
                                        },
                                        {
                                            name: "E-mail",
                                            value: email
                                        },
                                        {
                                            name: "Message",
                                            value: message
                                        }
                                    ],
                                    footer: {
                                        text: "User's local time"
                                    }
                                }
                            ]
                        };

                        let result = await fetch(process.env.REACT_APP_CONTACT_DISCORD_WEBHOOK_URL as string, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(payload)
                        });

                        if (!result.ok)
                            setError(language.dictionary.failedToSendMessage);

                        setError(undefined);
                        setSuccess(language.dictionary.messageSent);
                    }
                    catch (err) {
                        console.error(err);
                        setError(language.dictionary.failedToSendMessage);
                    }
                }}>{language.dictionary.send}</Button>
            </FormRow>
            {error && (
                <FormRow>
                    <Alert type="error">{error}</Alert>
                </FormRow>
            )}
            {success && (
                <FormRow>
                    <Alert type="success">{success}</Alert>
                </FormRow>
            )}
        </Form>
    );
}
