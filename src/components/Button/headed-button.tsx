import {Button} from '@headlessui/react';
import React from 'react';
import styles from './primary-button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const HeadedButton: React.FC<ButtonProps> = ({children, onClick, className = ''}) => {
    return (
        <Button
            onClick={onClick}
            className={`${styles['hui-primary-button']} ${className}`}
        >
            {children}
        </Button>
    );
};