"use client"
import {VariantEnum} from "@/components/variants"
import {useState} from "react";
import {HeadedTimeline} from "@/components/nested/date/Timeline/headed-timeline";
import {HeadedCalendar} from "@/components/nested/date/Calendar/headed-calendar";
import {EventProps} from "@/components/nested/date/event";
import {HeadedProgress} from "@/components/nested/milestones/Progress/headed-progress";
import {HeadedStepper} from "@/components/nested/milestones/Stepper/headed-stepper";
import {HeadedDatePicker} from "@/components/nested/date/DatePicker/headed-date-picker";
import {HeadedCarousel} from "@/components/nested/content/Carousel/headed-carousel";

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


    const eventData: EventProps[] = [
        {
            variant: VariantEnum.Secondary,
            name: "Milestone 1",
            date: new Date(2024, 2, 1), // March 1st

            description: "Complete design document",
        },
        {
            variant: VariantEnum.Primary,
            name: "Project Kickoff",
            date: new Date(2024, 2, 10), // March 10th
            description: "Start of the project",
            endDate: new Date(2024, 2, 15) // March 15th
        },

        {
            variant: VariantEnum.Outline,
            name: "Team Meeting",
            date: new Date(2024, 2, 20), // March 20th
            description: "Weekly team meeting",
        },
    ];


    return (
        <div>
            <HeadedCarousel variant={VariantEnum.Primary}>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </HeadedCarousel>

            <HeadedDatePicker variant={VariantEnum.Primary}/>

            <HeadedTimeline variant={VariantEnum.Primary} events={eventData}/>
            <HeadedCalendar
                variant={VariantEnum.Primary}
                initialYear={2024}
                initialMonth={8} // September (month is 0-based)
                events={eventData}
            />

            <HeadedProgress progress={69} variant={VariantEnum.Primary}></HeadedProgress>
            <HeadedStepper steps={['Step 1', 'Step 2', 'Step 3']} currentStepsCompleted={1}
                           variant={VariantEnum.Primary}></HeadedStepper>
        </div>
    )
}

