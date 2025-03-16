import React from 'react';
import Select from 'react-select';


const Dropdown = ({ placeholder, list, className }) => {

    const indicatorSeparatorStyle = {
        width: 0,
    };

    const IndicatorSeparator = ({ innerProps }) => {
        return <span style={indicatorSeparatorStyle} {...innerProps} />;
    };

    const customStyles = {
        placeholder: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: '#585D6E',
        }),
        control: (provided, state) => ({
            ...provided,
            border: '0',
            boxShadow: state.isFocused ? 'none' : 'none',
        }),
    };


    return (
        <Select
            className={className}
            components={{ IndicatorSeparator }}
            placeholder={placeholder}
            options={list}
            styles={customStyles}
        />
    );
}

export default Dropdown;