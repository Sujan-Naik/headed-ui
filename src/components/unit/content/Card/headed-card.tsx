import React from 'react';
import styles from './headed-card.module.css';
import { VariantEnum } from '../../../variants';

interface HeadedCardProps {
    width?: string;
    height?: string;
    variant: VariantEnum;
    children: React.ReactNode;
}

export const HeadedCard: React.FC<HeadedCardProps> = ({width, height, variant, children}) => {
    return (
        <div
            className={`${styles[`hui-${variant}-card`]}`}
            style={{width, height}}
        >
            {children}
        </div>
    );
};