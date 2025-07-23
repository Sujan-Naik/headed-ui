import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react';
import {VariantEnum} from '../../../variants';
import styles from './headed-popover.module.css'
import React from "react";

interface HeadedPopoverProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum;
}

export function HeadedPopover({title, children, variant}: HeadedPopoverProps) {
    return (
        <Popover className="relative">
            <PopoverButton className={`${styles[`hui-${variant}-popover-button`]}`}>{title}</PopoverButton>
            <PopoverPanel anchor="bottom" className={`${styles[`hui-${variant}-popover-panel`]} flex flex-col`}>
                {children}
            </PopoverPanel>
        </Popover>
    );
}