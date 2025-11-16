import { forwardRef, HTMLInputTypeAttribute, MouseEventHandler, ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import { Alert } from "./Alert";
import { useLanguage } from "../hooks/LanguageProvider";

import "../styles/components/Form.scss";

interface FormProps { 
    children?: ReactNode;
}

export function Form(props: FormProps) {
    return (
        <div className="form">
            {props.children}
        </div>
    );
}

interface FormRowProps { 
    children?: ReactNode;
}

export function FormRow(props: FormRowProps) {
    return (
        <div className="form-row">
            {props.children}
        </div>
    );
}

interface ButtonProps {
    type: "primary" | "secondary";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <button className={clsx("btn", `btn-${props.type}`)} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

interface InputProps {
    id?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input className="textbox" id={props.id} type={props.type} placeholder={props.placeholder} ref={ref} />
));

interface TextareaProps {
    id?: string;
    placeholder?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
    <textarea className="textbox" id={props.id} placeholder={props.placeholder} ref={ref} />
));

export function ContactForm() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const language = useLanguage();

    return (
        <Form>
            <FormRow>
                <Input type="text" placeholder={language.dictionary.name} ref={nameInputRef} />
                <Input type="email" placeholder={language.dictionary.email} ref={emailInputRef}  />
            </FormRow>
            <FormRow>
                <Textarea placeholder={language.dictionary.message} ref={messageInputRef} />
            </FormRow>
            <FormRow>
                <Button type="primary" onClick={async () => {
                    const nameInput = nameInputRef.current;
                    const emailInput = emailInputRef.current;
                    const messageInput = messageInputRef.current;

                    if (!nameInput || !emailInput || !messageInput) {
                        setError(language.dictionary.unknownError);
                        return;
                    }

                    if (!nameInput.value || !emailInput.value || !messageInput.value) {
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
                                            value: nameInput.value,
                                            inline: true
                                        },
                                        {
                                            name: "E-mail",
                                            value: emailInput.value,
                                        },
                                        {
                                            name: "Message",
                                            value: messageInput.value,
                                        }
                                    ],
                                    footer: {
                                        text: "User's local time"
                                    }
                                }
                            ]
                        };

                        let result = await fetch(import.meta.env.VITE_CONTACT_DISCORD_WEBHOOK_URL as string, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(payload)
                        });

                        if (!result.ok)
                            setError(language.dictionary.failedToSendMessage);

                        nameInput.value = "";
                        emailInput.value = "";
                        messageInput.value = "";

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
