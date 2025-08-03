"use client"
import React, {useState} from "react";
import * as HeadedUI from '../index';
import {TextAnimationType} from "@/components/unit/content/TextAnim/headed-text-anim";


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


    const initialStates = Object.values(HeadedUI.VariantEnum).reduce((acc, variant) => {
        acc[variant] = false; // or your initial value
        return acc;
    }, {} as Record<HeadedUI.VariantEnum, boolean>);

    const [switchStates, setSwitchStates] = useState<Record<HeadedUI.VariantEnum, boolean>>(initialStates);

    const handleSwitchChange = (variant: HeadedUI.VariantEnum) => {
        // Create a copy of the state object to avoid mutation
        const updatedStates = {...switchStates};
        updatedStates[variant] = !updatedStates[variant];
        setSwitchStates(updatedStates);
    };
      const [maxResults, setMaxResults] = useState(10)


    return (

        <div style={{display: 'flex', gap: '20px'}}>
            {Object.keys(variantsMap).map((variantKey) => {
                const variant = variantKey as HeadedUI.VariantEnum
                return (
                    <div key={variant} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        minWidth: '200px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        boxSizing: 'border-box'
                    }}>
                                    <a href={'/nested'}> View nested components</a>

                        <h3>{variant}</h3>
                        <HeadedUI.HeadedAccordion>
                            <HeadedUI.AccordionItem title="Item 1" variant={variant}>
                                <div>Content for Item 1</div>
                            </HeadedUI.AccordionItem>
                            <HeadedUI.AccordionItem title="Item 2" variant={variant}>
                                <div>Content for Item 2</div>
                            </HeadedUI.AccordionItem>
                        </HeadedUI.HeadedAccordion>
                        <HeadedUI.HeadedButton variant={variant}>Button {variant}</HeadedUI.HeadedButton>

                        <HeadedUI.HeadedInput
                            variant={variant}
                          type="number"
                          placeholder="Max results"
                          value={maxResults}
                          onChange={(e) => setMaxResults(Number(e))}
                          className="w-32"
                          min={1}
                          max={100}
                        />

                        <HeadedUI.HeadedCard variant={variant}>Card {variant}</HeadedUI.HeadedCard>

                        <HeadedUI.HeadedButton variant={variant} onClick={() => setOpenDialogVariant(variant)}>
                            Trigger the {variant} Dialog
                        </HeadedUI.HeadedButton>

                        <HeadedUI.HeadedDialog
                            variant={variant}
                            isOpen={openDialogVariant === variant}
                            onClick={() => setOpenDialogVariant(null)}
                            title="Dialog"
                        >
                            Dialog Content {variant}
                        </HeadedUI.HeadedDialog>

                        <HeadedUI.HeadedButton variant={variant} onClick={() => setOpenToastVariant(variant)}>
                            Trigger the {variant} Toast
                        </HeadedUI.HeadedButton>

                        <HeadedUI.HeadedToast
                            variant={variant}
                            isOpen={openToastVariant === variant}
                            onClick={() => setOpenToastVariant(null)}
                            title="Toast"
                            position={HeadedUI.PositionEnum.CENTER}

                        >
                            Toast Content {variant}
                        </HeadedUI.HeadedToast>

                        <HeadedUI.HeadedDropdown
                            variant={variant}
                            selected={dropdownOption}
                            options={[{label: 'Label of Option 1', value: 'Option 1'}, {
                                label: 'Label of Option 2',
                                value: 'Option 2'
                            }]}
                            onChange={(selected) => {
                                SetDropDownOption(selected)
                            }}
                        />


                        <HeadedUI.HeadedButton variant={variant} onClick={() => setCurrentModalVariant(variant)}>
                            Trigger Modal {variant}
                        </HeadedUI.HeadedButton>

                        <HeadedUI.HeadedLink variant={variant} href={'/structure'}>
                            Go to the structure page
                        </HeadedUI.HeadedLink>

                        <HeadedUI.HeadedModal
                            variant={variant}
                            isOpen={currentModalVariant === variant}
                            onClose={() => setCurrentModalVariant(null)}
                            title={`Modal ${variant}`}
                        >
                            Modal Content {variant}
                        </HeadedUI.HeadedModal>


                        <HeadedUI.HeadedPopover variant={variant} title={`Popover ${variant}`}>
                            <div>Popover Content {variant}</div>
                        </HeadedUI.HeadedPopover>

                        <HeadedUI.HeadedSelect
                            variant={variant}
                            options={['Option A', 'Option B']}
                            label={'Label for HeadedSelect'}
                            description={`Select ${variant}`}
                            onChange={() => {
                            }}
                        />


                        <p id={`switch-${variant}`}>Switch is off</p>
                        <HeadedUI.HeadedSwitch
                            variant={variant}
                            checked={switchStates[variant]}
                            onChange={(checked) => {
                                console.log('SWITCHED');
                                handleSwitchChange(variant)
                                document.getElementById(`switch-${variant}`)!.textContent = `Switch is ${checked ? 'on' : 'off'}`;
                            }}
                        />

                        <HeadedUI.HeadedTextAnim animation={TextAnimationType.FADE_IN}>This text fades in</HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={TextAnimationType.COLOR_CYCLE}>This text cycles colour</HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={TextAnimationType.TYPEWRITER}>This text animates letter by letter</HeadedUI.HeadedTextAnim>
                        <HeadedUI.HeadedTextAnim animation={TextAnimationType.SLIDE_UP}>This text slides up</HeadedUI.HeadedTextAnim>

                        <HeadedUI.HeadedTabs
                            variant={variant}
                            tabs={['Tab 1', 'Tab 2']}
                            children={[
                                <div key="1">Content for Tab 1 {variant}</div>,
                                <div key="2">Content for Tab 2 {variant}</div>
                            ]}
                        />
                    </div>
                )
            })}
        </div>
    )
}