import {VariantEnum} from "@/components/variants";
import React from "react";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";
import {EventProps, HeadedEvent} from "@/components/nested/date/event";





interface TimelineProps{
    variant: VariantEnum;
    events: EventProps[];
}

export const HeadedTimeline: React.FC<TimelineProps> = ({ variant, events }) => {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  return (
    <>
      {sortedEvents.map((event, index) => (
        <HeadedEvent key={index} {...event} variant={variant} />
      ))}
    </>
  );
};



