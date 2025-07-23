import * as React$1 from 'react';
import React__default, { ChangeEventHandler, MouseEventHandler } from 'react';
import { LinkProps } from 'next/link';

declare enum VariantEnum {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Outline = "outline"
}

interface AccordionItemProps {
    title: string;
    children: React__default.ReactNode;
    variant: VariantEnum;
}
declare const AccordionItem: React__default.FC<AccordionItemProps>;
declare const HeadedAccordion: React__default.FC<{
    children: React__default.ReactNode;
}>;

interface ButtonProps {
    children: React__default.ReactNode;
    onClick?: () => void;
    className?: string;
    variant: VariantEnum;
}
declare const HeadedButton: React__default.FC<ButtonProps>;

interface HeadedCardProps {
    width?: string;
    height?: string;
    variant: VariantEnum;
    children: React__default.ReactNode;
    style?: React__default.CSSProperties;
    className?: string;
}
declare const HeadedCard: React__default.FC<HeadedCardProps>;

interface HeadedDialogProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum;
    children: React__default.ReactNode;
    position?: PositionEnum$1;
}
declare enum PositionEnum$1 {
    CENTER = "center",
    TOP = "top",
    BOTTOM = "bottom",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
declare const HeadedDialog: React__default.FC<HeadedDialogProps>;

interface HeadedDropdownProps {
    options: HeadedDropdownOption[];
    selected: string;
    onChange: (value: string) => void;
    variant: VariantEnum;
    horizontal?: boolean;
}
interface HeadedDropdownOption {
    label: string;
    value: string;
}
declare const HeadedDropdown: React__default.FC<HeadedDropdownProps>;

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React__default.ReactNode;
    onClick?: () => void;
    variant: VariantEnum;
}
declare const HeadedLink: React__default.FC<PrimaryLinkProps>;

interface HeadedModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    variant: VariantEnum;
    children: React__default.ReactNode;
}
declare const HeadedModal: React__default.FC<HeadedModalProps>;

interface HeadedPopoverProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum;
}
declare function HeadedPopover({ title, children, variant }: HeadedPopoverProps): React$1.JSX.Element;

interface HeadedSelectProps {
    options: string[];
    label: string;
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    variant: VariantEnum;
}
declare const HeadedSelect: React__default.FC<HeadedSelectProps>;

interface HeadedSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    variant: VariantEnum;
    label?: React__default.ReactNode;
}
declare const HeadedSwitch: React__default.FC<HeadedSwitchProps>;

interface HeadedTabsProps {
    tabs: string[];
    children: React__default.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: VariantEnum;
}
declare const HeadedTabs: React__default.FC<HeadedTabsProps>;

interface HeadedToastProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum;
    children: React__default.ReactNode;
    position?: PositionEnum;
}
declare enum PositionEnum {
    CENTER = "center",
    TOP = "top",
    BOTTOM = "bottom",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
declare const HeadedToast: React__default.FC<HeadedToastProps>;

export { AccordionItem, HeadedAccordion, HeadedButton, HeadedCard, HeadedDialog, HeadedDropdown, type HeadedDropdownOption, HeadedLink, HeadedModal, HeadedPopover, HeadedSelect, HeadedSwitch, HeadedTabs, HeadedToast, VariantEnum };
