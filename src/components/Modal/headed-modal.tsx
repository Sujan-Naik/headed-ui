import React from 'react';
import {Dialog} from '@headlessui/react';
import styles from './primary-modal.module.css';
import {HeadedButton} from "@/components/Button/headed-button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const HeadedModal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}
                className={`fixed inset-0 z-10 overflow-y-auto ${styles['hui-primary-modal']}`}>
            <div className="modal-content">
                <Dialog.Title>{title}</Dialog.Title>
                <div>{children}</div>
                <HeadedButton onClick={onClose}>Close</HeadedButton>
            </div>
        </Dialog>
    );
};