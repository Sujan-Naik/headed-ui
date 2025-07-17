import React, {Fragment} from 'react';
import {Listbox} from '@headlessui/react';
import styles from './primary-dropdown.module.css';

interface DropdownProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}

export const PrimaryDropdown: React.FC<DropdownProps> = ({options, selected, onChange}) => {
    return (
        <Listbox value={selected} onChange={onChange}>
            <div className="relative">
                <Listbox.Button className={styles['hui-primary-dropdown']}>{selected}</Listbox.Button>
                <Listbox.Options className="absolute z-10">
                    {options.map((option) => (
                        <Listbox.Option key={option} value={option} as={Fragment}>
                            {({focus}) => (
                                <li className={`cursor-pointer ${focus ? 'bg-gray-200' : ''}`}>
                                    {option}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
};