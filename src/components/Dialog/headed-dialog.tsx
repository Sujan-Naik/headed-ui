import React from 'react';
import {Dialog} from '@headlessui/react';
import styles from './headed-dialog.module.css';
import {HeadedButton} from "@/components/Button/headed-button";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const HeadedDialog: React.FC<DialogProps> = ({isOpen, onClose, title, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className={styles['hui-primary-dialog']}>
            <div className={styles['hui-primary-dialog-panel']}>
                <Dialog.Title className={styles['hui-primary-dialog-title']}>{title}</Dialog.Title>
                {children}
                <HeadedButton onClick={onClose}>Close</HeadedButton>
            </div>
        </Dialog>
    );
};