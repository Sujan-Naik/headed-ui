import React, {SetStateAction, useState} from 'react';
import {HeadedDropdown} from "@/components/unit/overlays/Dropdown/headed-dropdown";
import {VariantEnum} from "@/components/variants";
import {HeadedButton} from "@/components/unit/interactive/Button/headed-button";

interface DatePickerProps {
    variant: VariantEnum;
}

export const HeadedDatePicker: React.FC<DatePickerProps> = ({variant}) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 10}, (_, i) => currentYear + i);

    const months = Array.from({length: 12}, (_, i) => ({
        value: i + 1,
        label: new Date(0, i).toLocaleString('default', {month: 'long'}),
    }));

    const hours = Array.from({length: 24}, (_, i) => ({
        value: i.toString(),
        label: i.toString().padStart(2, '0'),
    }));

    const minutes = Array.from({length: 60}, (_, i) => ({
        value: i.toString(),
        label: i.toString().padStart(2, '0'),
    }));

    // State for each selection
    const [selectedYear, setSelectedYear] = useState(years[0].toString());
    const [selectedMonth, setSelectedMonth] = useState(months[0].value.toString());
    const selectedOption = months.find(m => m.value === Number(selectedMonth));
    const selectedLabel = selectedOption ? selectedOption.label : '';

    const [selectedDay, setSelectedDay] = useState('1');
    const [selectedHour, setSelectedHour] = useState('0');
    const [selectedMinute, setSelectedMinute] = useState('0');

    // Function to get days based on selected month and year
    const getDaysInMonth = (year: string, month: string) => {
        return new Date(parseInt(year), parseInt(month), 0).getDate();
    };

    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    const days = Array.from({length: daysInMonth}, (_, i) => ({
        value: (i + 1).toString(),
        label: (i + 1).toString(),
    }));

    const handleSubmit = () => {
        const date = new Date(
            parseInt(selectedYear),
            parseInt(selectedMonth) - 1,
            parseInt(selectedDay),
            parseInt(selectedHour),
            parseInt(selectedMinute)
        );
        alert(`Selected Date and Time: ${date.toString()}`);
    };

    return (
        <div>
            <div>
                <label htmlFor="year">Year:</label>
                <HeadedDropdown
                    options={years.map((yr) => ({label: yr.toString(), value: yr.toString()}))}
                    selected={selectedYear}
                    onChange={(value: SetStateAction<string>) => setSelectedYear(value)}
                    variant={variant} // replace with your actual variant
                />
            </div>

            <div>
                <label htmlFor="month">Month:</label>
                <HeadedDropdown
                    options={months.map((m) => ({label: m.label, value: m.value.toString()}))}
                    selected={selectedLabel}
                    onChange={(value: string) => setSelectedMonth(value)}
                    variant={variant}
                />
            </div>

            <div>
                <label htmlFor="day">Day:</label>
                <HeadedDropdown
                    options={days}
                    selected={selectedDay}
                    onChange={(value: SetStateAction<string>) => setSelectedDay(value)}
                    variant={variant}
                />
            </div>

            <div>
                <label htmlFor="hour">Hour:</label>
                <HeadedDropdown
                    options={hours}
                    selected={selectedHour}
                    onChange={(value: SetStateAction<string>) => setSelectedHour(value)}
                    variant={variant}
                />
            </div>

            <div>
                <label htmlFor="minute">Minute:</label>
                <HeadedDropdown
                    options={minutes}
                    selected={selectedMinute}
                    onChange={(value: SetStateAction<string>) => setSelectedMinute(value)}
                    variant={variant}
                />
            </div>

            <HeadedButton variant={variant} onClick={handleSubmit}>Submit</HeadedButton>
        </div>
    );
};