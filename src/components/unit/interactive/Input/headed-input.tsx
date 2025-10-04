'use client'

import React from 'react';
import styles from './headed-input.module.css';
import {VariantEnum} from '../../../variants'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onChange}
      className={`${styles[`hui-${variant}-input`]} ${className}`}
    />
  );
};