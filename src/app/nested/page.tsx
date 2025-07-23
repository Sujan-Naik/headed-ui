"use client"

import * as HeadedUI from '../../index';


export default function Home() {

    const eventData: HeadedUI.EventProps[] = [
        {
            variant: HeadedUI.VariantEnum.Secondary,
            name: "Milestone 1",
            date: new Date(2024, 2, 1), // March 1st

            description: "Complete design document",
        },
        {
            variant: HeadedUI.VariantEnum.Primary,
            name: "Project Kickoff",
            date: new Date(2024, 2, 10), // March 10th
            description: "Start of the project",
            endDate: new Date(2024, 2, 15) // March 15th
        },

        {
            variant: HeadedUI.VariantEnum.Outline,
            name: "Team Meeting",
            date: new Date(2024, 2, 20), // March 20th
            description: "Weekly team meeting",
        },
    ];


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '90%', alignItems: 'center'}}>
            <h1>Carousel</h1>
            <HeadedUI.HeadedCarousel variant={HeadedUI.VariantEnum.Primary}>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </HeadedUI.HeadedCarousel>

            <h1>Date Picker</h1>
            <HeadedUI.HeadedDatePicker variant={HeadedUI.VariantEnum.Primary}/>


            <h1> Timeline </h1>
            <HeadedUI.HeadedTimeline variant={HeadedUI.VariantEnum.Primary} events={eventData}/>

            <h1> Calendar </h1>
            <HeadedUI.HeadedCalendar
                variant={HeadedUI.VariantEnum.Primary}
                initialYear={2024}
                initialMonth={2} // September (month is 0-based)
                events={eventData}
            />

            <h1> Progress bar </h1>
            <HeadedUI.HeadedProgress progress={69} variant={HeadedUI.VariantEnum.Primary}></HeadedUI.HeadedProgress>

            <h1> Stepper </h1>
            <HeadedUI.HeadedStepper steps={['Step 1', 'Step 2', 'Step 3']} currentStepsCompleted={1}
                           variant={HeadedUI.VariantEnum.Primary}></HeadedUI.HeadedStepper>
        </div>
    )
}

