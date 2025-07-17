import React from 'react';
import {Dialog} from '@headlessui/react';
import styles from './primary-modal.module.css';
import {PrimaryButton} from "@/components/Button/primary-button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const PrimaryModal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}
                className={`fixed inset-0 z-10 overflow-y-auto ${styles['hui-primary-modal']}`}>
            <div className="modal-content">
                <Dialog.Title>{title}</Dialog.Title>
                <div>{children}</div>
                <PrimaryButton onClick={onClose}>Close</PrimaryButton>
            </div>
        </Dialog>
    );
};