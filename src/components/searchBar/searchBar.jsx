import React, { useState } from 'react'
import "./searchBar.scss"
import { DatePickerInput } from '@mantine/dates';
import { Select, TextInput } from '@mantine/core';
import { CalendarIcon } from '../../../public/assets/svg/svg';

export const SearchBar = ({ props }) => {
    const [date, setDate] = useState([null, null]);

    return (
        <div className="search-container">
            <div className='left'>
                <DatePickerInput
                    type="range"
                    placeholder="Start date ->  End date"
                    value={date}
                    onChange={setDate}
                    clearable
                />
            </div>
            <div className='middle'>
                <TextInput
                    placeholder="search rooms"
                />
            </div>
            <div className='right'>
                <Select
                    placeholder="Pick value"
                    data={['All', 'Delux']}
                />
            </div>
        </div>
    )
}
