import { Formik, Form } from "formik";
import React, { forwardRef, useCallback, useMemo, } from "react";
import InputComponent from "./inputComp";
import "./index.css"
import CheckBoxComponent from "./Checkbox";
import ImageUploadComponent from "./imageUpload"
import TextAreaComp from "./TextAreaComp";
import DropdownComponent from "./Dropdown";
import DropdownComponentPaginate from "./dropdownPaginate";
import ButtonComp from "../ButtonComp/ButtonComp";
import { onChangeTextCharacterLimitConst } from "@/constant/images";
import PhoneInputData from "../PhoneInput";
import DatePicker from "./datePicker";

const FormComponent = forwardRef(({ setDropdownState, extraDropdownOption, notToDisplayRow, loader, width, initialValues, validationSchema, handleSubmit, buttonText, buttonMarginLeft, forgotPassword }, ref) => {

    const getFormInitialValues = useMemo(() => {
        // const finalData = initialValues?.reduce((acc, i) => ({ ...acc, [i?.name]: i?.value }), {});
        // return finalData
        const result = initialValues.reduce((acc, curr) => {
            const key = curr.name;
            const keys = key.split('.');

            if (keys.length === 1) {
                acc[key] = "";
            } else {
                if (!acc[keys[0]]) {
                    acc[keys[0]] = {};
                }
                acc[keys[0]][keys[1]] = "";
            }

            return acc;
        }, {});

        return result

    }, [initialValues])

    // Custom onChange handler
    const handleChange = useCallback((setFieldValue, limit, regEx, allowMultipleSpace, data) => (event) => {
        const { name, value } = event.target;
        if (limit ? limit >= value?.length : onChangeTextCharacterLimitConst >= value?.length) {
            let updateValue = true
            if (regEx) {
                updateValue = regEx.test(value)
            }
            if (updateValue) {
                let value2 = value;
                if (!allowMultipleSpace) {
                    value2 = value.replace(/ +/g, ' ');
                }
                setFieldValue(name, value2.trimStart());
            }
        }
    }, []);

    return (
        <>
            <Formik
                initialValues={getFormInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                innerRef={ref}
                enableReinitialize
            >
                {({ values, setFieldValue, errors }) => (
                    <Form
                        className={notToDisplayRow ? "justify-content-between" : "row justify-content-between"}
                    >
                        {
                            initialValues?.map((i) => {
                                return (
                                    <div className={i?.style?.flex ? "col col-12 col-md-6 " : "col col-12"} style={{ padding: "0 10px" }}>
                                        {i?.type === "checkbox" ?
                                            <CheckBoxComponent
                                                checkBoxArray={i?.checkBoxArray}
                                                forgotPassword={forgotPassword}
                                            /> :
                                            i?.type === "file" ?
                                                <ImageUploadComponent
                                                    multiple={i?.multiple}
                                                    value={values[i?.name]}
                                                    label={i?.label}
                                                    setFieldValue={setFieldValue}
                                                    name={i?.name}
                                                /> :

                                                i?.type === "textarea" ?
                                                    <TextAreaComp
                                                        disabled={loader || i?.disabled}
                                                        label={i?.label}
                                                        type={i?.type}
                                                        value={values[i?.name]}
                                                        onChange={handleChange}
                                                        setFieldValue={setFieldValue}
                                                        limit={i?.limit}
                                                        regEx={i?.regEx}
                                                        allowMultipleSpace={i?.allowMultipleSpace}
                                                        name={i?.name}
                                                        Placeholder={i?.placeHolder}
                                                    /> :
                                                    i?.type === "dropdown" ?
                                                        <div className="mb-4">
                                                            <DropdownComponent
                                                                setDropdownState={setDropdownState}
                                                                Placeholder={i?.placeHolder}
                                                                value={values[i?.name]}
                                                                disabled={loader || i?.disabled}
                                                                label={i?.label}
                                                                extraDropdownOption={extraDropdownOption}
                                                                setFieldValue={setFieldValue}
                                                                name={i?.name}
                                                            />
                                                        </div>
                                                        :
                                                        i?.type === "dropdownPaginate" ?
                                                            <div className="mb-4">
                                                                <DropdownComponentPaginate
                                                                    Placeholder={i?.placeHolder}
                                                                    value={values[i?.name]}
                                                                    disabled={loader || i?.disabled}
                                                                    label={i?.label}
                                                                    isMulti={i?.isMulti}
                                                                    typeOfApi={i?.typeOfApi}
                                                                    setFieldValue={setFieldValue}
                                                                    name={i?.name}
                                                                    isFormComp={true}
                                                                />
                                                            </div>
                                                            :
                                                            i?.type === "phone" ?
                                                                <PhoneInputData
                                                                    label={i?.label}
                                                                    name={i?.name}
                                                                    setFieldValue={setFieldValue}
                                                                    value={values[i?.name]}
                                                                />
                                                                :
                                                                i?.type === "date" ?
                                                                    <DatePicker
                                                                        label={i?.label}
                                                                        name={i?.name}
                                                                        setFieldValue={setFieldValue}
                                                                        value={values[i?.name]}
                                                                    />
                                                                    :
                                                                    <InputComponent
                                                                        disabled={loader || i?.disabled}
                                                                        label={i?.label}
                                                                        type={i?.type}
                                                                        value={values[i?.name]}
                                                                        onChange={handleChange}
                                                                        setFieldValue={setFieldValue}
                                                                        limit={i?.limit}
                                                                        regEx={i?.regEx}
                                                                        allowMultipleSpace={i?.allowMultipleSpace}
                                                                        name={i?.name}
                                                                        Placeholder={i?.placeHolder}
                                                                    />}
                                    </div>
                                )
                            })
                        }
                        <div className={notToDisplayRow ? "mt-3 mx-2" : "mt-3"}>
                            {buttonText &&
                                <ButtonComp
                                    text={buttonText}
                                    type="submit"
                                    loader={loader}
                                    width={width}
                                    buttonMarginLeft={buttonMarginLeft}
                                // onClick={() => handleSubmit() }
                                />
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
)
export default FormComponent;
