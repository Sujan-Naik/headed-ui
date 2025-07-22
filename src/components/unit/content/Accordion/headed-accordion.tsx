import React from 'react';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import styles from './headed-accordion.module.css';
import { VariantEnum } from '../../../variants';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, variant }) => (
    <Disclosure>
        {({ open }) => (
            <div className={`${styles[`hui-${variant}-accordion`]} ${open ? styles[`open`] : ''}`}>
                <DisclosureButton className={`${styles[`hui-${variant}-accordion-title`]}`}>
                    <p>{title} <a className={styles[`accordion-arrow`]}> {open ? '▲' : '▼'} </a></p>
                </DisclosureButton>
                <DisclosurePanel className={`${styles[`hui-${variant}-accordion-content`]}`}>
                    {children}
                </DisclosurePanel>
            </div>
        )}
    </Disclosure>
);

export const HeadedAccordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};