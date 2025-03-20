import { ReactNode, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

import { useLanguage } from "../hooks/LanguageProvider";
import { ContactForm } from "./Form";

import "../styles/components/Modal.scss";

type ModelCloseEventHandler = () => any;

export function Modal({ show, children }: { show: boolean, children: ReactNode }) {
    const [className, setClassName] = useState("modal");

    useEffect(() => {
        setClassName(show ? "modal show" : "modal");
    }, [show]);

    return (
        <div className={className}>
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

export function ContactModal({ show, onClose }: { show: boolean, onClose: ModelCloseEventHandler }) {
    const language = useLanguage();

    return (
        <Modal show={show}>
            <ModalHeader onClose={onClose}>
                <h3>{language.dictionary.contact}</h3>
                <p className="muted">{language.dictionary.contactDescription}</p>
            </ModalHeader>
            <ContactForm />
        </Modal>
    );
}
