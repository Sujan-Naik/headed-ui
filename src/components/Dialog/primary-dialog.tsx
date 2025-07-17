import React from 'react';
import {Dialog} from '@headlessui/react';
import styles from './primary-dialog.module.css';
import {PrimaryButton} from "@/components/Button/primary-button";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const PrimaryDialog: React.FC<DialogProps> = ({isOpen, onClose, title, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className={styles['hui-primary-dialog']}>
            <div className={styles['hui-primary-dialog-panel']}>
                <Dialog.Title className={styles['hui-primary-dialog-title']}>{title}</Dialog.Title>
                {children}
                <PrimaryButton onClick={onClose}>Close</PrimaryButton>
            </div>
        </Dialog>
    );
};