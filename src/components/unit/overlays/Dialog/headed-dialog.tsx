import React from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';
import styles from './headed-dialog.module.css';
import { HeadedButton } from "@/components/unit/interactive/Button/headed-button";
import { VariantEnum } from '../../../variants';
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

interface HeadedDialogProps {
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

export const HeadedDialog: React.FC<HeadedDialogProps> = ({ isOpen, onClick, title, children, variant, position }) => {

    const getPositionStyles = (pos?: PositionEnum) => {
  // Base styles for the outer container
  const baseStyles = {
    position: 'fixed' as const,
    inset: 0,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
      // pointerEvents: 'none' as const,
      backgroundColor: 'transparent'
  };

  // Additional styles based on position
  switch (pos) {
    case PositionEnum.TOP:
      return {
        ...baseStyles,
        alignItems: 'flex-start',
        paddingTop: '20px',
        justifyContent: 'center',
      };
    case PositionEnum.BOTTOM:
      return {
        ...baseStyles,
        alignItems: 'flex-end',
        paddingBottom: '20px',
        justifyContent: 'center',
      };
    case PositionEnum.TOP_LEFT:
      return {
        ...baseStyles,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '20px',
      };
    case PositionEnum.TOP_RIGHT:
      return {
        ...baseStyles,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '20px',
      };
    case PositionEnum.BOTTOM_LEFT:
      return {
        ...baseStyles,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '20px',
      };
    case PositionEnum.BOTTOM_RIGHT:
      return {
        ...baseStyles,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: '20px',
      };
    case PositionEnum.CENTER:
    default:
      return {
        ...baseStyles,
        alignItems: 'center',
        justifyContent: 'center',
      };
  }
    };
    const style = getPositionStyles(position);

    return (
        <Dialog
            open={isOpen}
            onClose={onClick}
            className={`fixed inset-0 z-10 overflow-y-auto ${styles[`hui-${variant}-dialog`]}`}
            style={style}
        >
            <DialogPanel>
                <HeadedCard variant={variant}>
                    <Dialog.Title>{title}</Dialog.Title>
                    <div>{children}</div>
                    <HeadedButton variant={variant} onClick={onClick}>Close</HeadedButton>
                </HeadedCard>
            </DialogPanel>
        </Dialog>
    );
};


