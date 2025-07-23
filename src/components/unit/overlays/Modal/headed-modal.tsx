import React from 'react';
import {Dialog} from '@headlessui/react';
import styles from './headed-modal.module.css';
import {HeadedButton} from "@/components/unit/interactive/Button/headed-button";
import {VariantEnum} from '../../../variants';

interface HeadedModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    variant: VariantEnum;
    children: React.ReactNode;
}

export const HeadedModal: React.FC<HeadedModalProps> = ({isOpen, onClose, title, children, variant}) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className={styles[`hui-${variant}-modal`]}>
            <div className={styles[`hui-${variant}-modal-panel`]}>
                <Dialog.Title className={styles[`hui-${variant}-modal-title`]}>{title}</Dialog.Title>
                {children}
                <HeadedButton variant={variant} onClick={onClose}>Close</HeadedButton>
            </div>
        </Dialog>
    );
};