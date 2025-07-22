"use client"
import {VariantEnum} from "@/components/variants"
import {useState} from "react";
import {EventProps, HeadedTimeline} from "@/components/nested/date/Timeline/headed-timeline";

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


// const timelineData: EventProps[] = [
//     {
//     variant: VariantEnum.Secondary,
//     name: "Milestone 1",
//         date: new Date(2024, 2, 1), // March 1st
//
//     description: "Complete design document",
//   },
//   {
//     variant: VariantEnum.Primary,
//     name: "Project Kickoff",
//         date: new Date(2024, 2, 10), // March 10th
//     description: "Start of the project",
//     endDate: new Date(2024, 2, 15) // March 15th
//   },
//
//   {
//     variant: VariantEnum.Outline,
//     name: "Team Meeting",
//     date: new Date(2024, 2, 20), // March 20th
//     description: "Weekly team meeting",
//   },
// ];


  return (
      <div>
        {/*<HeadedCarousel variant={VariantEnum.Primary}>*/}
        {/*  <div>Slide 1</div>*/}
        {/*  <div>Slide 2</div>*/}
        {/*  <div>Slide 3</div>*/}
        {/*</HeadedCarousel>*/}

        {/*<HeadedDatePicker variant={VariantEnum.Primary}/>*/}

        {/*<HeadedTimeline variant={VariantEnum.Primary} events={timelineData} />*/}

      </div>
  )
  // return (
  //   <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
  //     {Object.keys(variantsMap).map((variantKey) => {
  //       const variant = variantKey as VariantEnum
  //       return (
  //         <div key={variant} style={{
  //             display: 'flex',
  //             flexDirection: 'column',
  //             alignItems: 'center', // centers children horizontally
  //             gap: '10px',
  //             minWidth: '200px',
  //             padding: '10px',
  //             border: '1px solid #ccc',
  //             borderRadius: '8px',
  //             backgroundColor: '#f9f9f9',
  //             boxSizing: 'border-box'
  //           }}>
  //           <h3>{variant}</h3>
  //             <HeadedAccordion>
  //             <AccordionItem title="Item 1" variant={variant}>
  //               <div>Content for Item 1</div>
  //             </AccordionItem>
  //             <AccordionItem title="Item 2" variant={variant}>
  //               <div>Content for Item 2</div>
  //             </AccordionItem>
  //           </HeadedAccordion>
  //             <HeadedButton variant={variant}>Button {variant}</HeadedButton>
  //             <HeadedCard variant={variant}>Card {variant}</HeadedCard>
  //
  //
  //           <HeadedButton variant={variant} onClick={() => setOpenVariant(variant)}>
  //         Trigger the {variant} Dialog
  //           </HeadedButton>
  //
  //             <HeadedDialog
  //             variant={variant}
  //             isOpen={openVariant === variant}
  //             onClick={() => setOpenVariant(null)}
  //             title="Dialog"
  //           >
  //             Dialog Content {variant}
  //           </HeadedDialog>
  //
  //             <HeadedDropdown
  //               variant={variant}
  //               selected={dropdownOption}
  //               options={['Option 1', 'Option 2']}
  //               onChange={(selected) => {SetDropDownOption(selected)}}
  //             />
  //
  //
  //
  //
  //           <HeadedButton variant={variant} onClick={() => setCurrentModalVariant(variant)}>
  //       Trigger Modal {variant}
  //     </HeadedButton>
  //
  //     <HeadedModal
  //       variant={variant}
  //       isOpen={currentModalVariant === variant}
  //       onClose={() => setCurrentModalVariant(null)}
  //       title={`Modal ${variant}`}
  //     >
  //       Modal Content {variant}
  //     </HeadedModal>
  //
  //
  //           <HeadedPopover variant={variant} title={`Popover ${variant}`}>
  //             <div>Popover Content {variant}</div>
  //           </HeadedPopover>
  //           <HeadedSelect
  //             variant={variant}
  //             options={['Option A', 'Option B']}
  //             label={'Label'}
  //             description={`Select ${variant}`}
  //             onChange={() => {}}
  //           />
  //
  //
  //           <p id="switch">Switch is off</p>
  //           <HeadedSwitch
  //             variant={variant}
  //             checked={switchState}
  //             onChange={(checked) => {
  //               console.log('SWITCHED');
  //               SetSwitchState(checked);
  //               document.getElementById('switch')!.textContent = `Switch is ${checked ? 'on' : 'off'}`;
  //             }}
  //           />
  //
  //           <HeadedTabs
  //             variant={variant}
  //             tabs={['Tab 1', 'Tab 2']}
  //             children={[
  //               <div key="1">Content for Tab 1 {variant}</div>,
  //               <div key="2">Content for Tab 2 {variant}</div>
  //             ]}
  //           />
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}