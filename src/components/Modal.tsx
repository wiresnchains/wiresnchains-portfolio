import clsx from 'clsx';
import { FiX } from 'react-icons/fi';
import { ContactForm } from './Form';
import { useTranslation } from '../hooks/use-locale';
import { BaseComponent, BaseParentComponent } from '../types';
import '../styles/components/Modal.scss';

export interface ModalProps extends BaseParentComponent {
    show: boolean;
    close(): void;
}

export function Modal(props: ModalProps) {
    return (
        <div className={clsx('modal', props.show && 'show')} onClick={props.close}>
            <div className={clsx('modal-window', props.utility)} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export interface ModalHeaderProps extends BaseParentComponent {
    close(): void;
}

export function ModalHeader(props: ModalHeaderProps) {
    return (
        <div className={clsx('modal-header', props.utility)}>
            {props.children}
            <button className="modal-close" onClick={props.close}>
                <FiX className="icon" />
            </button>
        </div>
    );
}

export interface ContactModalProps extends BaseComponent {
    show: boolean;
    close(): void;
}

export function ContactModal(props: ContactModalProps) {
    const translation = useTranslation();

    return (
        <Modal utility={props.utility} show={props.show} close={props.close}>
            <ModalHeader close={props.close}>
                <h3>{translation.navigation.contact}</h3>
                <p className="muted">{translation.contantForm.description}</p>
            </ModalHeader>
            <ContactForm />
        </Modal>
    );
}
