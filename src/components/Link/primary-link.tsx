import React from 'react';
import Link, {LinkProps} from 'next/link';
import styles from './primary-link.module.css';

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void; // Optional prop for additional click functionality
}

export const PrimaryLink: React.FC<PrimaryLinkProps> = ({
                                                            children,
                                                            className,
                                                            onClick,
                                                            ...props
                                                        }) => {
    return (
        <Link {...props} className={`${styles.link} ${className ?? ''}`} onClick={onClick}>
            {children}
        </Link>
    );
};