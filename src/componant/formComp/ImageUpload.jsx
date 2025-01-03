import { ErrorMessage, Field } from "formik";
import React, { memo, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx"

function ImageUploadComponent({ setFieldValue, label, name, value, multiple }) {
    const fileInputRef = useRef(null);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const files = Array.from(event.currentTarget.files);
        const validFiles = [];
        let errorMessage = "";

        files.forEach(file => {
            if (name !== "video" && file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
                errorMessage = "Only image  files are allowed";
            } else if (name === "video" && file.type !== "video/avi" && file.type !== "video/mp4" && file.type !== "video/webm") {
                errorMessage = "Only video files are allowed";
            }
            else if (file.type.includes("image") && file.size <= 5 * 1024 * 1024) {
                validFiles.push(file);
            } else if (file.type.includes("video") && file.size <= 10 * 1024 * 1024) {
                validFiles.push(file);
            } else {
                errorMessage = file.type.includes("image") ?
                    "Each image must be less than 5MB" :
                    "Each video must be less than 10MB";
            }
        });

        if (errorMessage) {
            setError(errorMessage);
        } else {
            if (multiple) {
                setFieldValue(name, [...value, ...validFiles]);
            } else {
                setFieldValue(name, files);
            }
        }
    };

    const onClickCrossIcons = (index) => {
        const newImages = value.filter((_, i) => i !== index);
        fileInputRef.current.value = ""
        setFieldValue(name, newImages);
    }

    const handleIconClick = () => {
        fileInputRef.current.click();
    };
    const isFile = (variable) => {
        return variable instanceof File;
    }

    return (
        <div className="mb-3 w-100">
            <div className="position-relative">
                <div>
                    <label
                        className="form-label"
                        htmlFor={name}>{label}</label>
                </div>

                {(value?.length < 5) &&
                    <div className="image-main-wrapper-data"
                        style={{ display: value?.length > 0 && !multiple ? "none" : "flex" }}
                        onClick={handleIconClick}
                    >
                        {/* <img src={studentDetailsImage?.uploadIcon} /> */}
                        {value?.length > 0 && multiple ?
                            <span style={{ color: "#6941C6" }}>Add More</span> :
                            value?.length == 0 ?
                                <div className="main-text-normal-white-colour" style={{ textAlign: "center", color: "var(--studnet-app-font-inner-color)" }}>
                                    <span style={{ color: "#6941C6" }}>Click to upload </span> <br />
                                    {name === "video" ? "mp4, webm, avi" : "png, jpg, jpeg"}</div>
                                : null
                        }

                        <input
                            id="profile-image-id"
                            type='file'
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            multiple={multiple || false}
                            onChange={handleFileChange}
                            accept={name === "video" ? "video/mp4, video/webm, video/avi" : "image/png, image/jpg, image/jpeg"}
                        />
                    </div>
                }

                <div style={{ display: "flex" }}>
                    {value?.length > 0 && value?.map((file, index) => {
                        const checkFileOrNot = isFile(file)
                        const createUrl = checkFileOrNot ? URL.createObjectURL(file) : file
                        const checkImageOrPreview = name === "video" ? false : true
                        return (
                            <div key={index} style={{ margin: '10px 5px', borderRadius: "8px", position: "relative" }}>
                                {checkImageOrPreview ?
                                    <img
                                        src={createUrl}
                                        alt={`preview ${index}`}
                                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: "8px" }}
                                    /> :
                                    <video
                                        src={createUrl}
                                        controls
                                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: "8px" }}>
                                        {`review ${index}`}
                                    </video>
                                }
                                <div className="image-main-wrapper-cross-icon"
                                    onClick={() => onClickCrossIcons(index)}
                                >
                                    <RxCross2 />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <ErrorMessage style={{ color: "red" }} name={name} component="div" />
        </div>
    );
};

export default memo(ImageUploadComponent);
