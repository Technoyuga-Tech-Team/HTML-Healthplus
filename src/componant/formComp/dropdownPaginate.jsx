import React from "react";
import { AsyncPaginate } from 'react-select-async-paginate';
import { ErrorMessage } from "formik";
import { getLanguageApi } from "@/services/language";

const DropdownComponentPaginate = ({ options,
    Placeholder,
    value,
    label,
    name,
    disabled,
    setFieldValue,
    onChange,
    width,
    height,
    padding,
    typeOfApi,
    isMulti,
    isFormComp
}) => {

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: width || "100%",
            borderRadius: 10,
            padding: 2,
            borderColor: state.isFocused ? "rgb(63, 97, 195)" : "#ced4da",
            boxShadow: state.isFocused ? "0 0 0 0.1rem rgba(31, 31, 31, 0.1)" : null,
            backgroundColor: state.isDisabled ? '#eff2f7' : 'white',
            color: "rgba(102, 102, 102, 1)"
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
    const loadMoreOptions = async (search, loadedOptions, { page }) => {
        let newFinalData;
        let hasMore = false;
        switch (typeOfApi) {
            case 'language':
                {
                    const finalData = {
                        page: page,
                        limit: 10,
                        search: search,
                        isActive: true,
                    }
                    const response = await getLanguageApi(finalData)
                    newFinalData = response?.data?.data?.map((u) => {
                        return {
                            label: u?.name,
                            value: u?._id
                        }
                    })
                    hasMore = response?.data?.hasMore
                }
                break;
        }

        return {
            options: newFinalData,
            hasMore: hasMore,
            additional: {
                page: page + 1,
            },
        }
    }

    if (!typeOfApi) return;
    return (
        <div
        >
            {label &&
                <label
                    className="form-label"
                    htmlFor={name}>{label}</label>
            }

            <AsyncPaginate
                isDisabled={disabled || false}
                loadOptions={loadMoreOptions}
                additional={{
                    page: 1,
                }}
                isMulti={isMulti || false}
                value={value}
                isClearable
                styles={customStyles}
                onChange={onChangeDropdownValue}
                placeholder={Placeholder || "Select option"}
            />

            {isFormComp &&
                <ErrorMessage style={{ color: "red" }} name={name} component="div" />
            }
        </div>
    );
};


export default DropdownComponentPaginate;
