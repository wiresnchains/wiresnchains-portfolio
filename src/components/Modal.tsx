import { ReactNode } from "react";
import { FiX } from "react-icons/fi";

import { useLanguage } from "../hooks/LanguageProvider";
import { ContactForm } from "./Form";

import "../styles/components/Modal.scss";

type ModelCloseEventHandler = () => any;

export function Modal({ children }: { children: ReactNode }) {
    return (
        <div className="modal">
            <div className="modal-window">
                {children}
            </div>
        </div>
    );
}

export function ModalHeader({ onClose, children }: { onClose: ModelCloseEventHandler, children: ReactNode }) {
    return (
        <div className="modal-header">
            {children}
            <button className="modal-close" onClick={onClose}><FiX /></button>
        </div>
    );
}

export function ContactModal({ onClose }: { onClose: ModelCloseEventHandler }) {
    const language = useLanguage();

    return (
        <Modal>
            <ModalHeader onClose={onClose}>
                <h3>{language.dictionary.contact}</h3>
                <p className="muted">{language.dictionary.contactDescription}</p>
            </ModalHeader>
            <ContactForm />
        </Modal>
    );
}
