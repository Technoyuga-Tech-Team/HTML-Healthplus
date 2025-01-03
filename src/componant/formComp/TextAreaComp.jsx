import { ErrorMessage } from "formik";
import  { memo } from "react";

function TextAreaComponent({ limit, regEx, allowMultipleSpace, setFieldValue, onChange, disabled, label, type, name, Placeholder, value }) {

    return (
        <div className="mb-3 w-100">
            <div className="position-relative">
                {label && <div>
                    <label
                        className="form-label"
                        htmlFor={name}>{label}</label>
                </div>
                }
                <textarea
                    onChange={onChange(setFieldValue, limit, regEx, allowMultipleSpace)}
                    value={value}
                    className={"form-control w-100"}
                    disabled={disabled}
                    placeHolder={Placeholder}
                    name={name} />
            </div>
            <ErrorMessage style={{ color: "red" }} name={name} component="div" />
        </div>
    );
};

export default memo(TextAreaComponent);
