import React from 'react';
import styles from './headed-input.module.css';
import {VariantEnum} from 'headed-ui';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: string) => void;
  variant: VariantEnum;
}

export const HeadedInput: React.FC<InputProps> = ({
  onChange,
  className = '',
  variant,
  ...props
}) => {
  return (
    <input
      {...props}
      onChange={(e) => onChange?.(e.target.value)}
      className={`${styles[`hui-${variant}-input`]} ${className}`}
    />
  );
};