import React, {MouseEventHandler} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import styles from './headed-tabs.module.css'
import {VariantEnum} from '../../../variants'

interface HeadedTabsProps {
    tabs: string[]
    children: React.ReactNode[]
    onClick?: MouseEventHandler<HTMLButtonElement>
    variant?: VariantEnum
}

export const HeadedTabs: React.FC<HeadedTabsProps> = ({tabs, children, onClick, variant = VariantEnum.Primary}) => {
    return (
        <TabGroup>
            <TabList className={styles[`hui-${variant}-tabs`]}>
                {tabs.map((tab, index) => (
                    <Tab key={index} className={styles[`hui-${variant}-tab`]} onClick={onClick}>
                        {tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {children.map((content, index) => (
                    <TabPanel key={index} className={styles[`hui-${variant}-panel`]}>
                        {content}
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}