import * as React$1 from 'react';
import React__default, { ChangeEventHandler, MouseEventHandler } from 'react';
import { LinkProps } from 'next/link';

interface ButtonProps {
    children: React__default.ReactNode;
    onClick?: () => void;
    className?: string;
}
declare const PrimaryButton: React__default.FC<ButtonProps>;

declare const PrimaryAccordion: React__default.FC<{
    children: React__default.ReactNode;
}>;

interface PrimaryCardProps {
    width?: string;
    height?: string;
    children: React__default.ReactNode;
}
declare const PrimaryCard: React__default.FC<PrimaryCardProps>;

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React__default.ReactNode;
}
declare const PrimaryDialog: React__default.FC<DialogProps>;

interface DropdownProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}
declare const PrimaryDropdown: React__default.FC<DropdownProps>;

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React__default.ReactNode;
    onClick?: () => void;
}
declare const PrimaryLink: React__default.FC<PrimaryLinkProps>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React__default.ReactNode;
}
declare const PrimaryModal: React__default.FC<ModalProps>;

interface PopoverProps {
    title: string;
    children: React.ReactNode;
}
declare function PrimaryPopover({ title, children }: PopoverProps): React$1.JSX.Element;

interface SelectProps {
    options: string[];
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}
declare const PrimarySelect: React__default.FC<SelectProps>;

interface TabsProps {
    tabs: string[];
    children: React__default.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const PrimaryTabs: React__default.FC<TabsProps>;

export { PrimaryAccordion, PrimaryButton, PrimaryCard, PrimaryDialog, PrimaryDropdown, PrimaryLink, PrimaryModal, PrimaryPopover, PrimarySelect, PrimaryTabs };
