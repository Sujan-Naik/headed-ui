import {Description, Field, Select} from '@headlessui/react'
import React, {ChangeEventHandler} from "react";
import {PrimaryCard} from "@/index"


interface SelectProps {
    options: string[];
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}


export const PrimarySelect: React.FC<SelectProps> = ({options, description, onChange}) => {
    return (
        <PrimaryCard>


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
        </PrimaryCard>

    )
}