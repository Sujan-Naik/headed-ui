'use client'

import React from 'react';
import styles from './headed-link.module.css';
import {VariantEnum} from "@/components/variants";

interface HeadedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    variant: VariantEnum;
}

export const HeadedLink: React.FC<HeadedLinkProps> = ({
    children,
    className,
    variant,
    ...props
}) => {
    return (
        <a {...props} className={`${styles[`hui-${variant}-link`]} ${className ?? ''}`}>
            {children}
        </a>
    );
};