import Select from "react-select";

const DropdownComponent = ({
    options,
    onChange,
    defaultVal,
    value,
    width,
    padding,
    placeholder,
    isDisabled,
    isMulti,
    isClear,
    name,
    setFieldValue
}) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: width || "100%",
            borderRadius: 4,
            borderColor: state.isFocused ? "rgb(63, 97, 195)" : "#ced4da",
            boxShadow: state.isFocused ? "0 0 0 0.1rem rgba(31, 31, 31, 0.1)" : null,
            backgroundColor: state.isDisabled ? '#eff2f7' : 'white',
            color: "#505d69"
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "rgb(63, 97, 195)" : "white",
            color: state.isSelected ? "white" : "black",
            padding: padding || "8px",
            paddingLeft: 8,
            "&:hover": {
                backgroundColor: "#f2f2f2",
                color: "black",
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "grey",
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.isDisabled ? '#505d69' : ' #505d69' // Change text color for selected value
        }),
    };

    const onChangeDropdownValue = (data) => {
        if (onChange) {
            onChange(data)
        } else {
            setFieldValue(name, data)
        }
    }


    return (
        <div>
            <Select
                options={options}
                styles={customStyles}
                onChange={onChangeDropdownValue}
                placeholder={placeholder || "Select an option"}
                defaultValue={defaultVal}
                isSearchable={false}
                value={value}
                isDisabled={isDisabled || false}
                isMulti={isMulti || false}
                isClearable={isClear || false}
            />
        </div>
    );
};

export default DropdownComponent;
