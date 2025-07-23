import React from 'react';
import styles from './headed-toast.module.css';
import {HeadedButton} from "@/components/unit/interactive/Button/headed-button";
import {VariantEnum} from '../../../variants';
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

interface HeadedToastProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum;
    children: React.ReactNode;
    position?: PositionEnum;
}

export enum PositionEnum {
    CENTER = 'center',
    TOP = 'top',
    BOTTOM = 'bottom',
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_RIGHT = 'bottom-right',
}

export const HeadedToast: React.FC<HeadedToastProps> = ({
                                                            isOpen,
                                                            onClick,
                                                            title,
                                                            children,
                                                            variant,
                                                            position,
                                                        }) => {

    const getPositionStyles = (pos?: PositionEnum) => {
        const baseStyles = {
            // backgroundColor: 'transparent',
            position: 'fixed' as const,
            display: 'flex' as const,
            alignItems: 'center' as const,
            justifyContent: 'center' as const,
        };

        switch (pos) {
            case PositionEnum.TOP:
                return {
                    ...baseStyles,
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            case PositionEnum.BOTTOM:
                return {
                    ...baseStyles,
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            case PositionEnum.TOP_LEFT:
                return {
                    ...baseStyles,
                    top: '20px',
                    left: '20px',
                    transform: undefined,
                };
            case PositionEnum.TOP_RIGHT:
                return {
                    ...baseStyles,
                    top: '20px',
                    right: '20px',
                    transform: undefined,
                };
            case PositionEnum.BOTTOM_LEFT:
                return {
                    ...baseStyles,
                    bottom: '20px',
                    left: '20px',
                    transform: undefined,
                };
            case PositionEnum.BOTTOM_RIGHT:
                return {
                    ...baseStyles,
                    bottom: '20px',
                    right: '20px',
                    transform: undefined,
                };
            case PositionEnum.CENTER:
            default:
                return {
                    ...baseStyles,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                };
        }
    };

    const style = getPositionStyles(position);

    if (!isOpen) {
        return null; // Don't render anything if not open
    }

    return (
        <div
            className={` z-10 overflow-y-auto ${styles[`hui-${variant}-toast`]}`}
            style={style}
        >
            <HeadedCard variant={variant}>
                <h2>{title}</h2>
                <div>{children}</div>
                <HeadedButton variant={variant} onClick={onClick}>Close</HeadedButton>
            </HeadedCard>
        </div>
    );
};