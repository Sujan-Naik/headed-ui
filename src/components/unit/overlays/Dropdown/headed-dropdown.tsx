import React from 'react';
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react';
import styles from './headed-dropdown.module.css';
import {VariantEnum} from '../../../variants';

interface HeadedDropdownProps {
    options: HeadedDropdownOption[];
    selected: string;
    onChange: (value: string) => void;
    variant: VariantEnum;
    horizontal?: boolean;
}

export interface HeadedDropdownOption {
    label: string;
    value: string;
}

export const HeadedDropdown: React.FC<HeadedDropdownProps> = ({options, horizontal, selected, onChange, variant}) => {
    return (
        <Listbox horizontal={horizontal} value={selected} onChange={onChange}>
            <div className="relative">
                <ListboxButton className={styles[`hui-${variant}-dropdown-button`]}>{selected}</ListboxButton>
                <ListboxOptions className="absolute z-10" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', textAlign: 'center'
                }}>
                    {options.map((option) => (
                        <ListboxOption key={option.value} value={option.value}
                                       className={styles[`hui-${variant}-dropdown-option`]}>
                            {option.label}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};