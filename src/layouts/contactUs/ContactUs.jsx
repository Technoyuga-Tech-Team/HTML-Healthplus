import React, { useEffect, useRef, useState } from "react";
import "./index.css"
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import FormComponent from "@/componant/formComp/FormComp";
import { displayErrorToast, displaySuccessToast } from "@/utils/displayToasts";
import { contactUsApi } from "@/services/contactUs";
import { contactUsInitialValue, contactUsValidationSchema } from "@/utils/validationSchema";

const ContactUsLayout = () => {
    const [loader, setLoader] = useState()
    const contactUsRef = useRef()

    const onSubmitFormData = async (val) => {
        const finalData = {
            email: val?.email,
            message: val?.description,
            name: val?.title
        }
        setLoader(true)
        const response = await contactUsApi(finalData)
        if (response?.success) {
            displaySuccessToast(response?.message)
            contactUsRef?.current?.resetForm()
        } else {
            displayErrorToast(response?.message)
        }
        setLoader(false)
    }

    return (
        <div style={{background:"rgba(8, 126, 65, 0.1)"}}>
            <div className="container cu-contact-header-main-wrapper">
                <div className="cu-contact-header-main-wrapper-right">
                    <div className="py-5" style={{ textAlign: "center", padding: "50px 20px" }}>
                        <h1 className="main-text-header">Get in Touch</h1>
                        <div className="main-text-normal">
                            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                        </div>
                    </div>
                    <div className="subdiv">
                        <div className="main-text-normal d-flex flex-column contact-info contact-us-main-wrapper2" style={{ padding: "40px", color: '#fff', background: 'var(--primary-color)', justifyContent: 'start' }}>
                            <h4 style={{ marginBottom: '10px' }}>Contact Information</h4>
                            <p style={{ marginBottom: '30px' }}>Fill out the form and we will contact you as soon as possible.</p>
                            <div className="contact-item">
                                <FaGlobe className="contact-icon" />
                                <a
                                    className="important-link"
                                    onClick={() => {
                                        window.open(
                                            "",
                                            "_blank"
                                        );
                                    }}
                                >
                                    www.abcxyz.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a className="important-link" href="" target="_blank">abcxyz@abcxyz.com</a>
                                {/* mwest@nationbuilderslead.com */}
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                345-993457-45345
                            </div>
                        </div>
                        <div className="subdiv2 d-flex justify-content-center align-items-center">
                            <div className="contact-us-main-wrapper">
                                <FormComponent
                                    ref={contactUsRef}
                                    initialValues={contactUsInitialValue}
                                    validationSchema={contactUsValidationSchema}
                                    handleSubmit={(val) => onSubmitFormData(val)}
                                    buttonText={"Send Message"}
                                    loader={loader}
                                    buttonMarginLeft="10px"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsLayout;
