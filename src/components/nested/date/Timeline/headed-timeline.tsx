import {VariantEnum} from "@/components/variants";
import React from "react";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

export interface EventProps{
    variant: VariantEnum;
    name: string;
    description: string;
    date: Date;
    endDate?: Date;
}

const TimelineEvent : React.FC<EventProps> = ({variant, name, description, date, endDate}) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    let startStr = date.toLocaleDateString(undefined, options);
      if (endDate) {
        const endStr = endDate.toLocaleDateString(undefined, options);
        startStr = `${startStr} - ${endStr}`;
      }

    return <HeadedCard variant={variant}>
        <h1> {name}</h1>
        <p> {description}</p>
        <p> {startStr} </p>

    </HeadedCard>
}





interface TimelineProps{
    variant: VariantEnum;
    events: EventProps[];
}

export const HeadedTimeline: React.FC<TimelineProps> = ({ variant, events }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  return (
    <>
      {sortedEvents.map((event, index) => (
        <TimelineEvent key={index} {...event} variant={variant} />
      ))}
    </>
  );
};



