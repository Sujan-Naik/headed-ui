'use client'

import React from 'react';
import {VariantEnum} from "@/components/variants";
import {HeadedProgress} from "@/components/nested/milestones/Progress/headed-progress";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

interface HeadedStepperProps {
    steps: string[];
    currentStepsCompleted: number;
    variant: VariantEnum;
}

export const HeadedStepper: React.FC<HeadedStepperProps> = ({
                                                                steps,
                                                                currentStepsCompleted,
                                                                variant
                                                            }) => {
    const clampedStepper = Math.min(100, Math.max(0, currentStepsCompleted / (steps.length - 1) * 100));

    return (
        <div>
            <HeadedProgress progress={clampedStepper} variant={variant}/>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'relative',
                marginTop: '20px'
            }}>
                {steps.map((value, index) => (
                    <div key={index} style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                        <HeadedCard variant={variant}>{value}</HeadedCard>
                    </div>
                ))}
            </div>
        </div>
    );
};