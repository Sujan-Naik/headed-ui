"use client"
import { HeadedButton, HeadedAccordion, HeadedCard, HeadedDialog, HeadedDropdown, HeadedModal, HeadedPopover, HeadedSelect, HeadedSwitch, HeadedTabs } from "@/index"
import { VariantEnum } from "@/components/variants"
import { AccordionItem } from "@/components/Accordion/headed-accordion"
import {useState} from "react";

export default function Home() {
  const options = Object.values(VariantEnum)
  const variantsMap = options.reduce((acc, variant) => {
    if (!acc[variant]) {
      acc[variant] = []
    }
    acc[variant].push(variant)
    return acc
  }, {} as Record<VariantEnum, VariantEnum[]>)

    const [openVariant, setOpenVariant] = useState<VariantEnum | null>(null);

const [currentModalVariant, setCurrentModalVariant] = useState<VariantEnum | null>(null);
const [dropdownOption, SetDropDownOption] = useState<string>('Select an option');
const [switchState, SetSwitchState] = useState<boolean>(false);

  return (
    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
      {Object.keys(variantsMap).map((variantKey) => {
        const variant = variantKey as VariantEnum
        return (
          <div key={variant} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // centers children horizontally
              gap: '10px',
              minWidth: '200px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box'
            }}>
            <h3>{variant}</h3>
              <HeadedAccordion>
              <AccordionItem title="Item 1" variant={variant}>
                <div>Content for Item 1</div>
              </AccordionItem>
              <AccordionItem title="Item 2" variant={variant}>
                <div>Content for Item 2</div>
              </AccordionItem>
            </HeadedAccordion>
              <HeadedButton variant={variant}>Button {variant}</HeadedButton>
              <HeadedCard variant={variant}>Card {variant}</HeadedCard>


            <HeadedButton variant={variant} onClick={() => setOpenVariant(variant)}>
          Trigger the {variant} Dialog
            </HeadedButton>

              <HeadedDialog
              variant={variant}
              isOpen={openVariant === variant}
              onClick={() => setOpenVariant(null)}
              title="Dialog"
            >
              Dialog Content {variant}
            </HeadedDialog>

              <HeadedDropdown
                variant={variant}
                selected={dropdownOption}
                options={['Option 1', 'Option 2']}
                onChange={(selected) => {SetDropDownOption(selected)}}
              />




            <HeadedButton variant={variant} onClick={() => setCurrentModalVariant(variant)}>
        Trigger Modal {variant}
      </HeadedButton>

      <HeadedModal
        variant={variant}
        isOpen={currentModalVariant === variant}
        onClose={() => setCurrentModalVariant(null)}
        title={`Modal ${variant}`}
      >
        Modal Content {variant}
      </HeadedModal>


            <HeadedPopover variant={variant} title={`Popover ${variant}`}>
              <div>Popover Content {variant}</div>
            </HeadedPopover>
            <HeadedSelect
              variant={variant}
              options={['Option A', 'Option B']}
              label={'Label'}
              description={`Select ${variant}`}
              onChange={() => {}}
            />


            <p id="switch">Switch is off</p>
            <HeadedSwitch
              variant={variant}
              checked={switchState}
              onChange={(checked) => {
                console.log('SWITCHED');
                SetSwitchState(checked);
                document.getElementById('switch')!.textContent = `Switch is ${checked ? 'on' : 'off'}`;
              }}
            />

            <HeadedTabs
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