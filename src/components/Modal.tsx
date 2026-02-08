import clsx from 'clsx';
import { FiX } from 'react-icons/fi';
import { ContactForm } from './Form';
import { useTranslation } from '../hooks/use-locale';
import { BaseComponent, BaseParentComponent } from '../types';
import '../styles/components/Modal.scss';

export interface ModalProps extends BaseParentComponent {
    show: boolean;
}

export function Modal(props: ModalProps) {
    return (
        <div className={clsx('modal', props.show && 'show', props.utility)}>
            <div className="modal-window">{props.children}</div>
        </div>
    );
}

export interface ModalHeaderProps extends BaseParentComponent {
    onClose(): void;
}

export function ModalHeader(props: ModalHeaderProps) {
    return (
        <div className={clsx('modal-header', props.utility)}>
            {props.children}
            <button className="modal-close" onClick={props.onClose}>
                <FiX />
            </button>
        </div>
    );
}

export interface ContactModalProps extends BaseComponent {
    show: boolean;
    onClose(): void;
}

export function ContactModal(props: ContactModalProps) {
    const translation = useTranslation();

    return (
        <Modal utility={props.utility} show={props.show}>
            <ModalHeader onClose={props.onClose}>
                <h3>{translation.navigation.contact}</h3>
                <p className="muted">{translation.contantForm.description}</p>
            </ModalHeader>
            <ContactForm />
        </Modal>
    );
}
