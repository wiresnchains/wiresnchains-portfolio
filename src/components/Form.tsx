import clsx from 'clsx';
import { FormEvent, forwardRef, HTMLInputTypeAttribute, MouseEventHandler, useRef, useState } from 'react';
import { Alert } from './Alert';
import { useTranslation } from '../hooks/use-locale';
import { BaseComponent, BaseParentComponent } from '../types';
import '../styles/components/Form.scss';

export interface FormProps extends BaseParentComponent {
    onSubmit?(e: FormEvent<HTMLFormElement>): void;
}

export function Form(props: FormProps) {
    return (
        <form className={clsx('form', props.utility)} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
}

export function FormRow(props: BaseParentComponent) {
    return <div className={clsx('form-row', props.utility)}>{props.children}</div>;
}

export interface ButtonProps extends BaseParentComponent {
    type: 'primary' | 'secondary';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    submit?: boolean;
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={clsx('btn', `btn-${props.type}`, props.utility)}
            onClick={props.onClick}
            type={props.submit ? 'submit' : undefined}
        >
            {props.children}
        </button>
    );
}

export interface InputProps extends BaseComponent {
    id?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        className={clsx('textbox', props.utility)}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
    />
));

interface TextareaProps extends BaseComponent {
    id?: string;
    placeholder?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
    <textarea className={clsx('textbox', props.utility)} id={props.id} placeholder={props.placeholder} ref={ref} />
));

export function ContactForm() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const translation = useTranslation();

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput = nameInputRef.current;
        const emailInput = emailInputRef.current;
        const messageInput = messageInputRef.current;

        if (!nameInput || !emailInput || !messageInput) {
            setError(translation.contantForm.error);
            return;
        }

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            setError(translation.contantForm.emptyFields);
            return;
        }

        try {
            let payload = {
                embeds: [
                    {
                        title: 'Contact Form',
                        timestamp: new Date().toISOString(),
                        fields: [
                            {
                                name: 'Name',
                                value: nameInput.value,
                                inline: true,
                            },
                            {
                                name: 'E-mail',
                                value: emailInput.value,
                            },
                            {
                                name: 'Message',
                                value: messageInput.value,
                            },
                        ],
                        footer: {
                            text: "User's local time",
                        },
                    },
                ],
            };

            let result = await fetch(import.meta.env.VITE_CONTACT_DISCORD_WEBHOOK_URL as string, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!result.ok) setError(translation.contantForm.failed);

            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

            setError(undefined);
            setSuccess(translation.contantForm.sent);
        } catch (err) {
            console.error(err);
            setError(translation.contantForm.failed);
        }
    };

    return (
        <Form onSubmit={submit}>
            <FormRow>
                <Input type="text" placeholder={translation.contantForm.name} ref={nameInputRef} />
                <Input type="email" placeholder={translation.contantForm.email} ref={emailInputRef} />
            </FormRow>
            <FormRow>
                <Textarea placeholder={translation.contantForm.message} ref={messageInputRef} />
            </FormRow>
            <FormRow>
                <Button type="primary" submit>
                    {translation.contantForm.send}
                </Button>
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
