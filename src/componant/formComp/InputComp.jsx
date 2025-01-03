import { ErrorMessage, Field } from "formik";
import React, { memo, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

function InputComponent({ limit, regEx, allowMultipleSpace, setFieldValue, onChange, disabled, label, type, name, Placeholder, value }) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-3 w-100">
            <div className="position-relative">
                {label && <div>
                    <label
                        className="form-label"
                        htmlFor={name}>{label}</label>
                </div>
                }
                <Field
                    onChange={onChange(setFieldValue, limit, regEx, allowMultipleSpace)}
                    value={value}
                    className={type === 'password' ? "form-control" : "form-control"}
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type ? type : "text"}
                    disabled={disabled}
                    placeHolder={Placeholder}
                    name={name} />
                {type === 'password' && (
                    <span className="position-absolute" style={{ color: "#878a99", right: "10px", top: 34 }} onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )}
            </div>
            <ErrorMessage style={{ color: "red" }} name={name} component="div" />
        </div>
    );
};


export default memo(InputComponent);
