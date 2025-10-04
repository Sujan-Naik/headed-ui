'use client'

import React from 'react';
import styles from './headed-link-icon.module.css';

interface PrimaryLinkIconProps {
    icon: React.ReactNode; // Accepts a React node for the icon
    className?: string; // Optional class for additional styling
    onClick?: () => void; // Optional click handler
}

const HeadedLinkIcon: React.FC<PrimaryLinkIconProps> = ({icon, className, onClick}) => {
    return (
        <span
            className={`${styles.linkIcon} ${className ?? ''}`}
            onClick={onClick}
        >
            {icon}
        </span>
    );
};

export default HeadedLinkIcon;