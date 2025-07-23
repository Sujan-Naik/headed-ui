import React, {useState} from "react";
import {HeadedButton} from "@/components/unit/interactive/Button/headed-button";
import {VariantEnum} from "@/components/variants";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

interface CarouselProps {
    children: React.ReactNode;
    variant: VariantEnum;
}

export const HeadedCarousel: React.FC<CarouselProps> = ({children, variant}) => {
    const childrenArray = React.Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goBack = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
        );
    }

    const goForward = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
        );
    }

    return <div className={"flex-col"}>
        <HeadedCard variant={variant}>
            {childrenArray[currentIndex]}
        </HeadedCard>
        <div className={"flex-row"} style={{display: 'flex', justifyContent: 'space-between'}}>
            <HeadedButton variant={variant} onClick={goBack}> Go Back</HeadedButton>
            <HeadedButton variant={variant} onClick={goForward}> Go Forward</HeadedButton>
        </div>

    </div>
}