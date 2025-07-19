import React, {MouseEventHandler} from 'react';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react';
import styles from './headed-tabs.module.css';

interface TabsProps {
    tabs: string[];
    children: React.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const HeadedTabs: React.FC<TabsProps> = ({tabs, children, onClick}) => {
    return (
        <TabGroup>
            <TabList className={styles['hui-primary-tabs']}>
                {tabs.map((tab, index) => (
                    <Tab key={index} className={styles['hui-primary-tab']} onClick={onClick}>
                        {tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {children.map((content, index) => (
                    <TabPanel key={index} className="tab-panel">
                        {content}
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
};