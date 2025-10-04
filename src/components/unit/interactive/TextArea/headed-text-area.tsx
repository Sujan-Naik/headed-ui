'use client'

import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import styles from './headed-text-area.module.css';
import {VariantEnum} from '../../../variants';

interface TextAreaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  variant: VariantEnum;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  id?: string;
  name?: string;
  width?: string | number;
  height?: string | number;
  markdown: boolean;
}

export const HeadedTextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
  variant,
  disabled,
  rows = 4,
  cols,
  maxLength,
  required,
  readOnly,
  autoFocus,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  id,
  name,
  width,
    height,
  markdown = false
}) => {
  if (markdown) {
    const handleMDChange = (val?: string) => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: val || '' }
        } as React.ChangeEvent<HTMLTextAreaElement>;
        onChange(syntheticEvent);
      }
    };

    return (
      <MDEditor
        value={value}
        onChange={handleMDChange}
        data-color-mode="dark"
        className={className}
        height={height}
        style={{ width}}
      />
    );
  }

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles[`hui-${variant}-textarea`]} ${className}`}
      disabled={disabled}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      required={required}
      readOnly={readOnly}
      autoFocus={autoFocus}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      id={id}
      name={name}
      style={{ width, height }}
    />
  );
};