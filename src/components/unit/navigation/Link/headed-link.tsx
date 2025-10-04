'use client'

import React from 'react';
import Link, {LinkProps} from 'next/link';
import styles from './headed-link.module.css';
import {VariantEnum} from "@/components/variants";

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    variant: VariantEnum;
}

export const HeadedLink: React.FC<PrimaryLinkProps> = ({
                                                           children,
                                                           className,
                                                           onClick,
                                                           variant,
                                                           ...props
                                                       }) => {
    return (
        <Link {...props} className={`${styles[`hui-${variant}-link`]} ${className ?? ''}`} onClick={onClick}>
            {children}
        </Link>
    );
};