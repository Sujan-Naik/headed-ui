'use client'
import React, { useRef, useEffect } from 'react';
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
  markdown?: boolean;
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize for markdown mode
  useEffect(() => {
    if (markdown && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value, markdown]);

  return (
    <textarea
      ref={textareaRef}
      value={onChange ? value : undefined}
      defaultValue={!onChange ? value : undefined}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles[`hui-${variant}-textarea`]} ${markdown ? styles['markdown-mode'] : ''} ${className}`}
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
      style={{width, height, fontFamily: markdown ? 'monospace' : undefined}}
    />
  );
};