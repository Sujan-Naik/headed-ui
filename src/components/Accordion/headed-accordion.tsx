import React from 'react';
import {Disclosure} from '@headlessui/react';
import styles from './primary-accordion.module.css';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({title, children}) => (
    <Disclosure>
        {({open}) => (
            <div className={styles['hui-primary-accordion'] + (open ? ' ' + styles.open : '')}>
                <Disclosure.Button className={styles['hui-primary-accordion-title']}>
                    <p>{title}</p>
                    <p className={styles.accordionArrow}>
                        {open ? '▲' : '▼'}
                    </p>
                </Disclosure.Button>
                <Disclosure.Panel className={styles['hui-primary-accordion-content']}>
                    {children}
                </Disclosure.Panel>
            </div>
        )}
    </Disclosure>
);

export const HeadedAccordion: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <div>{children}</div>;
};