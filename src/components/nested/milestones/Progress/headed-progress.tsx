import React from 'react';
import styles from './headed-progress.module.css';
import {VariantEnum} from "@/components/variants";

interface HeadedProgressProps {
    progress: number;
    className?: string;
    style?: React.CSSProperties;
    variant: VariantEnum;
}

export const HeadedProgress: React.FC<HeadedProgressProps> = ({
                                                                  progress,
                                                                  className = '',
                                                                  style = {},
                                                                  variant
                                                              }) => {
    const clampedProgress = Math.min(100, Math.max(0, progress));

    return (
        <div
            className={`${styles[`hui-${variant}-progress-container`]} ${className}`}
            style={style}
        >
            <div
                className={`${styles[`hui-${variant}-progress-fill`]}`}
                style={{width: `${clampedProgress}%`}}
            >
                <div
                    className={`${styles[`hui-head`]}`}/>
            </div>

        </div>
    );
};