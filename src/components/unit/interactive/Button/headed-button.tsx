import {Button} from '@headlessui/react';
import React from 'react';
import styles from './headed-button.module.css';
import {VariantEnum} from '../../../variants'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant: VariantEnum;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    form?: string;
    name?: string;
    value?: string;
    autoFocus?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    id?: string;
}

export const HeadedButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    variant,
    type = 'button',
    disabled,
    form,
    name,
    value,
    autoFocus,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    id
}) => {
    return (
        <Button
            onClick={onClick}
            className={`${styles[`hui-${variant}-button`]} ${className}`}
            type={type}
            disabled={disabled}
            form={form}
            name={name}
            value={value}
            autoFocus={autoFocus}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedby}
            id={id}
        >
            {children}
        </Button>
    );
};