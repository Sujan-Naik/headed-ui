import React, {useState} from "react";
import {HeadedCalendarMonth} from "./headed-calendar-month"; // import the month view
import {VariantEnum} from "@/components/variants";
import {EventProps} from "@/components/nested/date/event";
import {HeadedButton} from "@/components/unit/interactive/Button/headed-button";

interface HeadedCalendarProps {
    variant: VariantEnum;
    initialYear?: number;
    initialMonth?: number;
    events: EventProps[];
}

export const HeadedCalendar: React.FC<HeadedCalendarProps> = ({
                                                                  variant,
                                                                  initialYear,
                                                                  initialMonth,
                                                                  events,
                                                              }) => {
    const today = new Date();
    const [year, setYear] = useState(initialYear ?? today.getFullYear());
    const [month, setMonth] = useState(initialMonth ?? today.getMonth());

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear((prev) => prev - 1);
        } else {
            setMonth((prev) => prev - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear((prev) => prev + 1);
        } else {
            setMonth((prev) => prev + 1);
        }
    };

    const handlePrevYear = () => {
        setYear((prev) => prev - 1);
    };

    const handleNextYear = () => {
        setYear((prev) => prev + 1);
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px"}}>
                <HeadedButton variant={variant} onClick={handlePrevYear}>Previous Year</HeadedButton>
                <HeadedButton variant={variant} onClick={handlePrevMonth}>Previous Month</HeadedButton>
                <div style={{fontWeight: "bold"}}>
                    {new Date(year, month).toLocaleString(undefined, {month: "long", year: "numeric"})}
                </div>
                <HeadedButton variant={variant} onClick={handleNextMonth}>Next Month</HeadedButton>
                <HeadedButton variant={variant} onClick={handleNextYear}>Next Year</HeadedButton>
            </div>

            <HeadedCalendarMonth variant={variant} year={year} month={month} events={events}/>
        </div>
    );
};