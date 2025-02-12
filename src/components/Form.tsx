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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const language = useLanguage();

    return (
        <Form>
            <FormRow>
                <Input id="contact-firstName" type="text" placeholder={language.dictionary.firstName} onChange={(e) => setFirstName(e.target.value)} />
                <Input id="contact-lastName" type="text" placeholder={language.dictionary.lastName} onChange={(e) => setLastName(e.target.value)} />
            </FormRow>
            <FormRow>
                <Input id="contact-email" type="email" placeholder={language.dictionary.email} onChange={(e) => setEmail(e.target.value)}  />
            </FormRow>
            <FormRow>
                <Textarea id="contact-text" placeholder={language.dictionary.message} onChange={(e) => setMessage(e.target.value)}  />
            </FormRow>
            <FormRow>
                <Button type="primary" onClick={async () => {
                    if (!firstName || !lastName || !email || !message) {
                        setError(language.dictionary.emptyFields);
                        return;
                    }

                    try {
                        let result = await fetch(process.env.REACT_APP_CONTACT_DISCORD_WEBHOOK_URL as string, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                embeds: [
                                    {
                                        title: "Contact Form",
                                        timestamp: new Date().toISOString(),
                                        fields: [
                                            {
                                                name: "First Name",
                                                value: firstName,
                                                inline: true
                                            },
                                            {
                                                name: "Second Name",
                                                value: lastName,
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
                            })
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
