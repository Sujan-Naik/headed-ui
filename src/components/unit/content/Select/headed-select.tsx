'use client'

import { Description, Field, Label, Select } from '@headlessui/react';
import React, { ChangeEventHandler } from 'react';
import { HeadedCard } from '@/index';
import { VariantEnum } from '../../../variants';
import styles from './headed-select.module.css';

interface OptionType {
  value: string;
  label: string;
}

interface HeadedSelectProps {
  options: Array<string | OptionType>; // Accepts strings or { value, label } objects
  label: string;
  description?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  variant: VariantEnum;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export const HeadedSelect: React.FC<HeadedSelectProps> = ({
  options,
  label,
  description,
  value,
  onChange,
  variant,
  name,
  required = false,
  disabled = false,
  placeholder = 'Select an option',
}) => {
  return (
    <HeadedCard variant={variant}>
      <Field>
        <Label>
          {label}
          {required && ' *'}
        </Label>
        {description && (
          <Description className={styles[`hui-${variant}-description`]}>
            {description}
          </Description>
        )}
        <Select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={styles[`hui-${variant}-select`]}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => {
            // Normalize to {value, label}
            const option =
              typeof opt === 'string' ? { value: opt, label: opt } : opt;
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Select>
      </Field>
    </HeadedCard>
  );
};
