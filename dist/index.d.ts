import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { LinkProps } from 'next/link';

declare enum VariantEnum$1 {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Outline = "outline"
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum$1;
}
declare const AccordionItem: React.FC<AccordionItemProps>;
declare const HeadedAccordion: React.FC<{
    children: React.ReactNode;
}>;

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant: VariantEnum$1;
}
declare const HeadedButton: React.FC<ButtonProps>;

interface HeadedCardProps {
    width?: string;
    height?: string;
    variant: VariantEnum$1;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
declare const HeadedCard: React.FC<HeadedCardProps>;

interface HeadedDialogProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum$1;
    children: React.ReactNode;
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
declare const HeadedDialog: React.FC<HeadedDialogProps>;

interface HeadedDropdownProps {
    options: HeadedDropdownOption[];
    selected: string;
    onChange: (value: string) => void;
    variant: VariantEnum$1;
    horizontal?: boolean;
}
interface HeadedDropdownOption {
    label: string;
    value: string;
}
declare const HeadedDropdown: React.FC<HeadedDropdownProps>;

declare enum VariantEnum {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Outline = "outline"
}

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange?: (value: string) => void;
    variant: VariantEnum;
}
declare const HeadedInput: React.FC<InputProps>;

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    variant: VariantEnum$1;
}
declare const HeadedLink: React.FC<PrimaryLinkProps>;

interface HeadedModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    variant: VariantEnum$1;
    children: React.ReactNode;
}
declare const HeadedModal: React.FC<HeadedModalProps>;

interface HeadedPopoverProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum$1;
}
declare function HeadedPopover({ title, children, variant }: HeadedPopoverProps): React.JSX.Element;

interface HeadedSelectProps {
    options: string[];
    label: string;
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    variant: VariantEnum$1;
}
declare const HeadedSelect: React.FC<HeadedSelectProps>;

interface HeadedSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    variant: VariantEnum$1;
    label?: React.ReactNode;
}
declare const HeadedSwitch: React.FC<HeadedSwitchProps>;

interface HeadedTabsProps {
    tabs: string[];
    children: React.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: VariantEnum$1;
}
declare const HeadedTabs: React.FC<HeadedTabsProps>;

interface HeadedToastProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum$1;
    children: React.ReactNode;
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
declare const HeadedToast: React.FC<HeadedToastProps>;

interface EventProps {
    variant: VariantEnum$1;
    name: string;
    description: string;
    date: Date;
    endDate?: Date;
}

interface CarouselProps {
    children: React.ReactNode;
    variant: VariantEnum$1;
}
declare const HeadedCarousel: React.FC<CarouselProps>;

interface HeadedCalendarProps {
    variant: VariantEnum$1;
    initialYear?: number;
    initialMonth?: number;
    events: EventProps[];
}
declare const HeadedCalendar: React.FC<HeadedCalendarProps>;

interface DatePickerProps {
    variant: VariantEnum$1;
}
declare const HeadedDatePicker: React.FC<DatePickerProps>;

interface HeadedProgressProps {
    progress: number;
    className?: string;
    style?: React.CSSProperties;
    variant: VariantEnum$1;
}
declare const HeadedProgress: React.FC<HeadedProgressProps>;

interface HeadedStepperProps {
    steps: string[];
    currentStepsCompleted: number;
    variant: VariantEnum$1;
}
declare const HeadedStepper: React.FC<HeadedStepperProps>;

interface TimelineProps {
    variant: VariantEnum$1;
    events: EventProps[];
}
declare const HeadedTimeline: React.FC<TimelineProps>;

export { AccordionItem, type EventProps, HeadedAccordion, HeadedButton, HeadedCalendar, HeadedCard, HeadedCarousel, HeadedDatePicker, HeadedDialog, HeadedDropdown, type HeadedDropdownOption, HeadedInput, HeadedLink, HeadedModal, HeadedPopover, HeadedProgress, HeadedSelect, HeadedStepper, HeadedSwitch, HeadedTabs, HeadedTimeline, HeadedToast, PositionEnum, VariantEnum$1 as VariantEnum };
