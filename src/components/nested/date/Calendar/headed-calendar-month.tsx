'use client'

import React from "react";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";
import {VariantEnum} from "@/components/variants";
import {EventProps} from "@/components/nested/date/event";

interface CalendarProps {
    variant: VariantEnum;
    year: number;
    month: number;
    events: EventProps[];
}

const getMonthDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startDay = firstDay.getDay();
    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
        calendarDays.push({day: null, date: null});
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push({
            day,
            date: new Date(year, month, day),
        });
    }

    while (calendarDays.length % 7 !== 0) {
        calendarDays.push({day: null, date: null});
    }

    return calendarDays;
};

export const HeadedCalendarMonth: React.FC<CalendarProps> = ({variant, year, month, events}) => {
    const days = React.useMemo(() => getMonthDays(year, month), [year, month]);


    const eventsMap = React.useMemo(() => {
        const map: Record<string, EventProps[]> = {};
        events.forEach((event) => {
            const dateStr = event.date.toDateString();
            if (!map[dateStr]) {
                map[dateStr] = [];
            }
            map[dateStr].push(event);
        });
        return map;
    }, [events]);

    const options = {year: 'numeric', month: 'short', day: 'numeric'} as const;

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px'}}>

            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
                <div key={dayName} style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {dayName}
                </div>
            ))}

            {days.map((dayObj, index) => {
                if (dayObj.day === null || !dayObj.date) {
                    return <div key={index}/>;
                }
                const dateStr = dayObj.date.toDateString();
                const dayEvents = eventsMap[dateStr] || [];

                return (
                    <div key={index} style={{border: '1px solid #ccc', padding: '4px'}}>
                        <div style={{fontWeight: 'bold'}}>{dayObj.day}</div>
                        {dayEvents.map((event, idx) => {
                            const startStr = event.date.toLocaleDateString(undefined, options);
                            const endStr = event.endDate
                                ? event.endDate.toLocaleDateString(undefined, options)
                                : null;
                            const dateRange = endStr ? `${startStr} - ${endStr}` : startStr;
                            return (
                                <HeadedCard key={idx} variant={variant}>
                                    <h2 style={{fontSize: '0.9em', margin: 0}}>{event.name}</h2>
                                    <p style={{fontSize: '0.8em', margin: 0}}>{event.description}</p>
                                    <p style={{fontSize: '0.7em', margin: 0}}>{dateRange}</p>
                                </HeadedCard>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};