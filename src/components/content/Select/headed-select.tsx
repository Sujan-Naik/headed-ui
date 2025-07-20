import {Description, Field, Label, Select} from '@headlessui/react';
import React, { ChangeEventHandler } from 'react';
import { HeadedCard } from '@/index';
import { VariantEnum } from '../../variants';
import styles from "./headed-select.module.css";

interface HeadedSelectProps {
    options: string[];
    label: string;
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    variant: VariantEnum;
}

export const HeadedSelect: React.FC<HeadedSelectProps> = ({ options, label, description, onChange, variant }) => {
    return (
        <HeadedCard variant={variant}>
            <Field>
                <Label>{label}</Label>
                <Description className={`${styles[`hui-${variant}-description`]}`}>{description}</Description>
                <Select className={`${styles[`hui-${variant}-select`]}`} name="status" aria-label="Project status" onChange={onChange}>
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