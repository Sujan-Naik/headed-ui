import {Button} from '@headlessui/react';
import React from 'react';
import styles from './headed-button.module.css';
import {VariantEnum} from '../../variants'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant: VariantEnum;
}

export const HeadedButton: React.FC<ButtonProps> = ({children, onClick, className = '', variant}) => {
    return (
        <Button
            onClick={onClick}
            className={`${styles[`hui-${variant}-button`]} ${className}`}
        >
            {children}
        </Button>
    );
};