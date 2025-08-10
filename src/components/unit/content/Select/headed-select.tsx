import {Description, Field, Label, Select} from '@headlessui/react';
import React, {ChangeEventHandler} from 'react';
import {HeadedCard} from '@/index';
import {VariantEnum} from '../../../variants';
import styles from "./headed-select.module.css";

interface HeadedSelectProps {
  options: string[];
  label: string;
  description?: string;
  value?: string;
  onChange:  ChangeEventHandler<HTMLSelectElement>;
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
  placeholder = "Select an option"
}) => {
  return (
    <HeadedCard variant={variant}>
      <Field>
        <Label>{label}{required && ' *'}</Label>
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
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>
    </HeadedCard>
  );
};