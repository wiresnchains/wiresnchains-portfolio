import { ReactNode } from "react";

import "../styles/components/Modal.scss";
import { useLanguage } from "../hooks/LanguageProvider";
import { FiX } from "react-icons/fi";
import { Form, FormRow, Button } from "./Form";

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
                <p className="muted">Some text...</p>
            </ModalHeader>
            <Form>
                <FormRow>
                    <Button type="primary">Test</Button>
                </FormRow>
                <FormRow>
                    <Button type="primary">Test</Button>
                </FormRow>
            </Form>
        </Modal>
    );
}
