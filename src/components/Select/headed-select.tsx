import {Description, Field, Select} from '@headlessui/react'
import React, {ChangeEventHandler} from "react";
import {HeadedCard} from "@/index"


interface SelectProps {
    options: string[];
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}


export const HeadedSelect: React.FC<SelectProps> = ({options, description, onChange}) => {
    return (
        <HeadedCard>


            <Field>
                <Description>{description}</Description>
                <Select name="status" aria-label="Project status" onChange={onChange}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </Field>
        </HeadedCard>

    )
}