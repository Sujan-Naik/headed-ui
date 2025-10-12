"use client"
import React, {useEffect, useState} from "react";
import * as HeadedUI from '../index';
import {useTheme} from "../index";

export default function Home() {
    const options = Object.values(HeadedUI.VariantEnum)
    const variantsMap = options.reduce((acc, variant) => {
        if (!acc[variant]) {
            acc[variant] = []
        }
        acc[variant].push(variant)
        return acc
    }, {} as Record<HeadedUI.VariantEnum, HeadedUI.VariantEnum[]>)

    const [openDialogVariant, setOpenDialogVariant] = useState<HeadedUI.VariantEnum | null>(null);
    const [openToastVariant, setOpenToastVariant] = useState<HeadedUI.VariantEnum | null>(null);
    const [currentModalVariant, setCurrentModalVariant] = useState<HeadedUI.VariantEnum | null>(null);
    const [dropdownOption, SetDropDownOption] = useState<string>('Select an option');
    const [selectedVariant, setSelectedVariant] = useState<HeadedUI.VariantEnum>(Object.values(HeadedUI.VariantEnum)[0]);
    const [activeSection, setActiveSection] = useState<string>('accordion');

    const initialStates = Object.values(HeadedUI.VariantEnum).reduce((acc, variant) => {
        acc[variant] = false;
        return acc;
    }, {} as Record<HeadedUI.VariantEnum, boolean>);

    const [switchStates, setSwitchStates] = useState<Record<HeadedUI.VariantEnum, boolean>>(initialStates);

    const handleSwitchChange = (variant: HeadedUI.VariantEnum) => {
        const updatedStates = {...switchStates};
        updatedStates[variant] = !updatedStates[variant];
        setSwitchStates(updatedStates);
    };

    const [maxResults, setMaxResults] = useState(10)
    const { theme, setTheme, themes } = useTheme();

    const sections = [
        { id: 'accordion', label: 'Accordion' },
        { id: 'button', label: 'Button' },
        { id: 'input', label: 'Input' },
        { id: 'card', label: 'Card' },
        { id: 'dialog', label: 'Dialog' },
        { id: 'textarea', label: 'TextArea' },
        { id: 'toast', label: 'Toast' },
        { id: 'dropdown', label: 'Dropdown' },
        { id: 'link', label: 'Link' },
        { id: 'modal', label: 'Modal' },
        { id: 'popover', label: 'Popover' },
        { id: 'select', label: 'Select' },
        { id: 'switch', label: 'Switch' },
        { id: 'textanim', label: 'Text Animation' },
        { id: 'tabs', label: 'Tabs' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: 'var(--base-background)' }}>
            {/* Sidebar */}
            <div style={{
                flex: '0 0 250px',
                paddingLeft: '20px',
                paddingRight: '20px',
                borderRight: '1px solid var(--border-color)',
                backgroundColor: 'var(--base-background)',
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflowY: 'auto'
            }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--base-foreground)' }}>Settings</h2>

                {/* Theme Selector */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Theme
                    </label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--base-background)',
                            color: 'var(--base-foreground)'
                        }}
                    >
                        {Object.keys(themes).map((themeName) => (
                            <option key={themeName} value={themeName}>
                                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Variant Selector */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Variant
                    </label>
                    <select
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value as HeadedUI.VariantEnum)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--base-background)',
                            color: 'var(--base-foreground)'
                        }}
                    >
                        {Object.keys(variantsMap).map((variantKey) => (
                            <option key={variantKey} value={variantKey}>
                                {variantKey.charAt(0).toUpperCase() + variantKey.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Navigation */}
                <div>
                    <h3 style={{
                        marginBottom: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Components
                    </h3>
                    <nav>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSection(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    display: 'block',
                                    padding: '8px 12px',
                                    marginBottom: '4px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    color: activeSection === section.id ? 'var(--link-color)' : 'var(--base-foreground)',
                                    backgroundColor: activeSection === section.id ? 'var(--highlight)' : 'transparent',
                                    fontWeight: activeSection === section.id ? '600' : '400',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {section.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', borderTop: '1px solid var(--border-color)' }}>
                    <a href={'/nested'} style={{ color: 'var(--link-color)', textDecoration: 'none' }}>
                        View nested components →
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                flex: 1,
                padding: '40px',
                maxWidth: '1200px',
                color: 'var(--base-foreground)'
            }}>
                <h1 style={{ marginBottom: '40px' }}>Component Showcase</h1>

                {/* Accordion Section */}
                <section id="accordion" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Accordion
                    </h2>
                    <HeadedUI.HeadedAccordion>
                        <HeadedUI.AccordionItem title="Item 1" variant={selectedVariant}>
                            <div>Content for Item 1</div>
                        </HeadedUI.AccordionItem>
                        <HeadedUI.AccordionItem title="Item 2" variant={selectedVariant}>
                            <div>Content for Item 2</div>
                        </HeadedUI.AccordionItem>
                    </HeadedUI.HeadedAccordion>
                </section>

                {/* Button Section */}
                <section id="button" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Button
                    </h2>
                    <HeadedUI.HeadedButton variant={selectedVariant}>
                        Button {selectedVariant}
                    </HeadedUI.HeadedButton>
                </section>

                {/* Input Section */}
                <section id="input" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Input
                    </h2>
                    <HeadedUI.HeadedInput
                        variant={selectedVariant}
                        type="number"
                        placeholder="Max results"
                        value={maxResults}
                        onChange={(e) => setMaxResults(Number(e))}
                        className="w-32"
                        min={1}
                        max={100}
                    />
                </section>

                {/* Card Section */}
                <section id="card" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Card
                    </h2>
                    <HeadedUI.HeadedCard variant={selectedVariant}>
                        Card {selectedVariant}
                    </HeadedUI.HeadedCard>
                </section>

                {/* Dialog Section */}
                <section id="dialog" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Dialog
                    </h2>
                    <HeadedUI.HeadedButton variant={selectedVariant} onClick={() => setOpenDialogVariant(selectedVariant)}>
                        Trigger Dialog
                    </HeadedUI.HeadedButton>
                    <HeadedUI.HeadedDialog
                        variant={selectedVariant}
                        isOpen={openDialogVariant === selectedVariant}
                        onClick={() => setOpenDialogVariant(null)}
                        title="Dialog"
                    >
                        Dialog Content {selectedVariant}
                    </HeadedUI.HeadedDialog>
                </section>

                {/* TextArea Section */}
                <section id="textarea" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        TextArea
                    </h2>
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>With Markdown</h3>
                        <HeadedUI.HeadedTextArea
                            markdown={true}
                            height={'100%'}
                            value={'# Headed TextArea Markdown'}
                            variant={selectedVariant}
                            width={'100%'}
                        />
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>Without Markdown</h3>
                        <HeadedUI.HeadedTextArea
                            markdown={false}
                            value={'Without markdown'}
                            height={'100%'}
                            width={'100%'}
                            variant={selectedVariant}
                        />
                    </div>
                </section>

                {/* Toast Section */}
                <section id="toast" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Toast
                    </h2>
                    <HeadedUI.HeadedButton variant={selectedVariant} onClick={() => setOpenToastVariant(selectedVariant)}>
                        Trigger Toast
                    </HeadedUI.HeadedButton>
                    <HeadedUI.HeadedToast
                        variant={selectedVariant}
                        isOpen={openToastVariant === selectedVariant}
                        onClick={() => setOpenToastVariant(null)}
                        title="Toast"
                        position={HeadedUI.PositionEnum.CENTER}
                    >
                        Toast Content {selectedVariant}
                    </HeadedUI.HeadedToast>
                </section>

                {/* Dropdown Section */}
                <section id="dropdown" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Dropdown
                    </h2>
                    <HeadedUI.HeadedDropdown
                        variant={selectedVariant}
                        selected={dropdownOption}
                        options={[
                            {label: 'Label of Option 1', value: 'Option 1'},
                            {label: 'Label of Option 2', value: 'Option 2'}
                        ]}
                        onChange={(selected) => SetDropDownOption(selected)}
                    />
                </section>

                {/* Link Section */}
                <section id="link" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Link
                    </h2>
                    <HeadedUI.HeadedLink variant={selectedVariant} href={'/'}>
                        Refresh this page
                    </HeadedUI.HeadedLink>
                </section>

                {/* Modal Section */}
                <section id="modal" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Modal
                    </h2>
                    <HeadedUI.HeadedButton variant={selectedVariant} onClick={() => setCurrentModalVariant(selectedVariant)}>
                        Trigger Modal
                    </HeadedUI.HeadedButton>
                    <HeadedUI.HeadedModal
                        variant={selectedVariant}
                        isOpen={currentModalVariant === selectedVariant}
                        onClose={() => setCurrentModalVariant(null)}
                        title={`Modal ${selectedVariant}`}
                    >
                        Modal Content {selectedVariant}
                    </HeadedUI.HeadedModal>
                </section>

                {/* Popover Section */}
                <section id="popover" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Popover
                    </h2>
                    <HeadedUI.HeadedPopover variant={selectedVariant} title={`Popover ${selectedVariant}`}>
                        <div>Popover Content {selectedVariant}</div>
                    </HeadedUI.HeadedPopover>
                </section>

                {/* Select Section */}
                <section id="select" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Select
                    </h2>
                    <HeadedUI.HeadedSelect
                        variant={selectedVariant}
                        options={['Option A', 'Option B']}
                        label={'Label for HeadedSelect'}
                        description={`Select ${selectedVariant}`}
                        onChange={() => {}}
                    />
                </section>

                {/* Switch Section */}
                <section id="switch" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Switch
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <HeadedUI.HeadedSwitch
                            variant={selectedVariant}
                            checked={switchStates[selectedVariant]}
                            onChange={(checked) => {
                                handleSwitchChange(selectedVariant)
                                document.getElementById(`switch-${selectedVariant}`)!.textContent = `Switch is ${checked ? 'on' : 'off'}`;
                            }}
                        />
                        <p id={`switch-${selectedVariant}`}>Switch is off</p>
                    </div>
                </section>

                {/* Text Animation Section */}
                <section id="textanim" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Text Animation
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <HeadedUI.HeadedTextAnim animation={HeadedUI.TextAnimationType.FADE_IN}>
                            This text fades in
                        </HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={HeadedUI.TextAnimationType.COLOR_CYCLE}>
                            This text cycles colour
                        </HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={HeadedUI.TextAnimationType.TYPEWRITER}>
                            This text animates letter by letter
                        </HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={HeadedUI.TextAnimationType.SLIDE_UP}>
                            This text slides up
                        </HeadedUI.HeadedTextAnim>
                    </div>
                </section>

                {/* Tabs Section */}
                <section id="tabs" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Tabs
                    </h2>
                    <HeadedUI.HeadedTabs
                        variant={selectedVariant}
                        tabs={['Tab 1', 'Tab 2']}
                        children={[
                            <div key="1">Content for Tab 1 {selectedVariant}</div>,
                            <div key="2">Content for Tab 2 {selectedVariant}</div>
                        ]}
                    />
                </section>
            </div>
        </div>
    )
}