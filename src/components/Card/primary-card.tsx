import React from 'react';
import styles from './primary-card.module.css';

interface PrimaryCardProps {
    width?: string;
    height?: string;
    children: React.ReactNode;
}

export const PrimaryCard: React.FC<PrimaryCardProps> = ({width, height, children}) => {
    return (
        <div
            className={styles['hui-primary-card']}
            style={{width, height}}
        >
            {children}
        </div>
    );
};