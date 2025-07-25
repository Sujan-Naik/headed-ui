import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { LinkProps } from 'next/link';

declare enum VariantEnum {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Outline = "outline"
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum;
}
declare const AccordionItem: React.FC<AccordionItemProps>;
declare const HeadedAccordion: React.FC<{
    children: React.ReactNode;
}>;

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant: VariantEnum;
}
declare const HeadedButton: React.FC<ButtonProps>;

interface HeadedCardProps {
    width?: string;
    height?: string;
    variant: VariantEnum;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
declare const HeadedCard: React.FC<HeadedCardProps>;

interface HeadedDialogProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum;
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
    variant: VariantEnum;
    horizontal?: boolean;
}
interface HeadedDropdownOption {
    label: string;
    value: string;
}
declare const HeadedDropdown: React.FC<HeadedDropdownProps>;

interface PrimaryLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    variant: VariantEnum;
}
declare const HeadedLink: React.FC<PrimaryLinkProps>;

interface HeadedModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    variant: VariantEnum;
    children: React.ReactNode;
}
declare const HeadedModal: React.FC<HeadedModalProps>;

interface HeadedPopoverProps {
    title: string;
    children: React.ReactNode;
    variant: VariantEnum;
}
declare function HeadedPopover({ title, children, variant }: HeadedPopoverProps): React.JSX.Element;

interface HeadedSelectProps {
    options: string[];
    label: string;
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    variant: VariantEnum;
}
declare const HeadedSelect: React.FC<HeadedSelectProps>;

interface HeadedSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    variant: VariantEnum;
    label?: React.ReactNode;
}
declare const HeadedSwitch: React.FC<HeadedSwitchProps>;

interface HeadedTabsProps {
    tabs: string[];
    children: React.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: VariantEnum;
}
declare const HeadedTabs: React.FC<HeadedTabsProps>;

interface HeadedToastProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    variant: VariantEnum;
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
    variant: VariantEnum;
    name: string;
    description: string;
    date: Date;
    endDate?: Date;
}

interface CarouselProps {
    children: React.ReactNode;
    variant: VariantEnum;
}
declare const HeadedCarousel: React.FC<CarouselProps>;

interface HeadedCalendarProps {
    variant: VariantEnum;
    initialYear?: number;
    initialMonth?: number;
    events: EventProps[];
}
declare const HeadedCalendar: React.FC<HeadedCalendarProps>;

interface DatePickerProps {
    variant: VariantEnum;
}
declare const HeadedDatePicker: React.FC<DatePickerProps>;

interface HeadedProgressProps {
    progress: number;
    className?: string;
    style?: React.CSSProperties;
    variant: VariantEnum;
}
declare const HeadedProgress: React.FC<HeadedProgressProps>;

interface HeadedStepperProps {
    steps: string[];
    currentStepsCompleted: number;
    variant: VariantEnum;
}
declare const HeadedStepper: React.FC<HeadedStepperProps>;

interface TimelineProps {
    variant: VariantEnum;
    events: EventProps[];
}
declare const HeadedTimeline: React.FC<TimelineProps>;

export { AccordionItem, type EventProps, HeadedAccordion, HeadedButton, HeadedCalendar, HeadedCard, HeadedCarousel, HeadedDatePicker, HeadedDialog, HeadedDropdown, type HeadedDropdownOption, HeadedLink, HeadedModal, HeadedPopover, HeadedProgress, HeadedSelect, HeadedStepper, HeadedSwitch, HeadedTabs, HeadedTimeline, HeadedToast, PositionEnum, VariantEnum };
