import { ReactNode } from 'react';
import clsx from 'clsx';
import { FiX } from 'react-icons/fi';

import { ContactForm } from './Form';

import '../styles/components/Modal.scss';
import { useTranslation } from '../hooks/use-locale';

interface ModalProps {
    show: boolean;
    children?: ReactNode;
}

export function Modal(props: ModalProps) {
    return (
        <div className={clsx('modal', props.show && 'show')}>
            <div className="modal-window">{props.children}</div>
        </div>
    );
}

interface ModalHeaderProps {
    onClose(): void;
    children?: ReactNode;
}

export function ModalHeader(props: ModalHeaderProps) {
    return (
        <div className="modal-header">
            {props.children}
            <button className="modal-close" onClick={props.onClose}>
                <FiX />
            </button>
        </div>
    );
}

interface ContactModalProps {
    show: boolean;
    onClose(): void;
}

export function ContactModal(props: ContactModalProps) {
    const translation = useTranslation();

    return (
        <Modal show={props.show}>
            <ModalHeader onClose={props.onClose}>
                <h3>{translation.navigation.contact}</h3>
                <p className="muted">{translation.contantForm.description}</p>
            </ModalHeader>
            <ContactForm />
        </Modal>
    );
}
