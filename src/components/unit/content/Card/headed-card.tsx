import React from 'react';
import styles from './headed-card.module.css';
import { VariantEnum } from '../../../variants';

interface HeadedCardProps {
  width?: string;
  height?: string;
  variant: VariantEnum;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const HeadedCard: React.FC<HeadedCardProps> = ({
  width,
  height,
  variant,
  children,
  style,
  className,
}) => {
  return (
    <div
      className={`${styles[`hui-${variant}-card`]} ${className ?? ''}`}
      style={{ width, height, ...style }}
    >
      {children}
    </div>
  );
};