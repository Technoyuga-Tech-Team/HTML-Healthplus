import FormComponent from '@/componant/formComp/FormComp'
import { interpreterFromInitialValue2, interpreterFromInitialValue2ValidationSchema, registerAsCustomeInterpreterValidationSchema, registerCustomerInterpreterInitialValue } from '@/utils/validationSchema'
import React, { useMemo, useRef, useState } from 'react'
import "./index.css"
import { registerPageConstant, tabBarOptions } from '@/constant/staticData'
import TabBar from '@/componant/tabBar/TabBar'
import { displayErrorToast, displaySuccessToast } from '@/utils/displayToasts'
import OtpVarificatiion from './otpVerification'
import countryJSON from '../../jsons/country'
import stateJSON from '../../jsons/state'
import cityJSON from '../../jsons/city'
import { sendOtpWithSignup, verifyOtpWithSignup } from '@/services/authentication'
import { MdOutlineVerified } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

const Register = () => {

    const registerRef = useRef()
    const secondRegisterRef = useRef()
    const [loader, setLoader] = useState(false)
    const [tabBar, setTabBar] = useState(tabBarOptions[0])
    const [formSteps, setFormSteps] = useState(0)
    const [dropdownState, setDropdownState] = useState(null)
    const [formData, setFormData] = useState({})

    const detailsOfSelectedTab = useMemo(() => {
        return tabBarOptions?.find((t) => t?.id == tabBar?.id)
    }, [tabBar])


    const onSubmitFormData = async (data) => {
        if (!data?.checkbox && formSteps == 0) {
            return displayErrorToast("Please agree Terms & Conditions")
        }
        setFormData({
            ...formData, ...data
        })
        setFormDataSecondStep()
        if ((formSteps == 0 && tabBar?.isCustomer) || (formSteps == 1 && !tabBar?.isCustomer)) {
            await sendOtpAPI({ email: data.email || formData?.email })
        } else {
            setFormSteps(formSteps + 1)
        }

    };

    const sendOtpAPI = async (data) => {
        setLoader(true)
        const response = await sendOtpWithSignup(data)
        if (response?.success) {
            displaySuccessToast(response.message)
            setFormSteps(formSteps + 1)
        } else {
            displayErrorToast(response.message)
        }
        setLoader(false)
        return
    }

    const verifyOtpAPI = async (data) => {
        setLoader(true)
        const values = formData
        if (values) {
            const finalFormData = {
                first_name: values.first_name,
                last_name: values.last_name,
                username: values.username,
                email: values.email,
                phone_number: values.phoneNumberLatest,
                country_code: values.countryCodeMain,
                iso_code: "US",
                password: values.password,
                language: values.language?.map((v) => v?.value),
                user_type: tabBar?.id,
                otp: data,
                date_of_birth: values?.date_of_birth?.format('MM-DD-YYYY') || undefined,
                address: values.address ? {
                    state: values.state,
                    city: values.city,
                    street: values.street,
                    address: values.address,
                    zipcode: values.zipcode,
                    country: values.country,
                } : undefined,
            };

            const response = await verifyOtpWithSignup(finalFormData)

            if (response?.success) {
                displaySuccessToast(response.message)
                setFormSteps(5)
            } else {
                displayErrorToast(response.message)
            }

        }
        setLoader(false)
    }


    const onClickTabBar = (id) => {
        setTabBar(id)
        setFormSteps(0)

        setFormData({})
        if (registerRef.current) {
            registerRef.current.resetForm();
        }
        if (secondRegisterRef.current) {
            secondRegisterRef.current.resetForm();
        }
    }

    const onChangeDropdownState = (data) => {
        setDropdownState(data)
        if (data?.phonecode) {
            secondRegisterRef?.current?.setFieldValue('state', "");
            secondRegisterRef?.current?.setFieldValue('city', "");
        }
        if (data?.country_id) {
            secondRegisterRef?.current?.setFieldValue('city', "");
        }
    }

    const dropdownOptions = useMemo(() => {
        const stateComparisionObj = secondRegisterRef?.current?.values?.country_code || dropdownState
        const cityComparisionObj = secondRegisterRef?.current?.values?.state || dropdownState
        const stateArray = stateJSON?.filter((id) => id?.country_id === stateComparisionObj?.value) || []
        const cityArray = cityJSON?.filter((id) => id?.state_value === cityComparisionObj?.value) || []

        return {
            country_code: countryJSON,
            state: stateArray,
            city: cityArray
        }
    }, [dropdownState])

    const firstFormComp = () => {
        return <FormComponent
            width={"80%"}
            initialValues={registerCustomerInterpreterInitialValue}
            validationSchema={registerAsCustomeInterpreterValidationSchema}
            handleSubmit={(val) => onSubmitFormData(val)}
            buttonText={"Sign up"}
            loader={loader}
            ref={registerRef}
        />
    }

    const otpVerificationComp = () => {
        return <OtpVarificatiion
            onClick={verifyOtpAPI}
            loader={loader}
            formData={formData}
        />
    }

    const secondFormComp = () => {
        return <FormComponent
            width={"80%"}
            extraDropdownOption={dropdownOptions}
            initialValues={interpreterFromInitialValue2}
            validationSchema={interpreterFromInitialValue2ValidationSchema}
            handleSubmit={(val) => onSubmitFormData(val)}
            buttonText={"Sign up"}
            loader={loader}
            ref={secondRegisterRef}
            setDropdownState={onChangeDropdownState}
        />
    }

    const successfullMessage = () => {
        return (
            <>
                <h2 style={{ textAlign: "center" }}>
                    <div className='my-3'> <MdOutlineVerified size={40} color='green' /></div>
                    Your Account has been created successfully as a {tabBar?.isCustomer ? "Customer" : "Interpreter"}
                </h2>
                <div className='font-color2' style={{ textAlign: "center" }}>
                    Now you'll be able to login using app
                </div>
            </>
        )
    }

    const renderComponant = () => {
        if (formSteps == 0) {
            return firstFormComp()
        }

        if (formSteps == 1 && tabBar?.isCustomer) {
            return otpVerificationComp()
        }

        if (formSteps == 1 && !tabBar?.isCustomer) {
            return secondFormComp()
        }

        if (formSteps == 2 && !tabBar?.isCustomer) {
            return otpVerificationComp()
        }

        if (formSteps == 5) {
            return successfullMessage()
        }
    }

    const onClickBackIcon = () => {
        setFormSteps(formSteps - 1)
        setTimeout(() => {
            if (registerRef?.current) {
                registerRef?.current?.setFieldValue('email', formData?.email);
                registerRef?.current?.setFieldValue('first_name', formData?.first_name);
                registerRef?.current?.setFieldValue('last_name', formData?.last_name);
                registerRef?.current?.setFieldValue('username', formData?.username);
                registerRef?.current?.setFieldValue('phone_number', formData?.phone_number);
                registerRef?.current?.setFieldValue('password', formData?.password);
                registerRef?.current?.setFieldValue('language', formData?.language);
                registerRef?.current?.setFieldValue('confirmPassword', formData?.confirmPassword);
                registerRef?.current?.setFieldValue('checkbox', formData?.checkbox);
            }

        }, 100);
        setFormDataSecondStep()

    }

    const setFormDataSecondStep = () => {
        setTimeout(() => {
            if (secondRegisterRef?.current) {
                secondRegisterRef?.current?.setFieldValue('date_of_birth', formData?.date_of_birth);
                secondRegisterRef?.current?.setFieldValue('country_code', formData?.country_code);
                secondRegisterRef?.current?.setFieldValue('state', formData?.state);
                secondRegisterRef?.current?.setFieldValue('city', formData?.city);
                secondRegisterRef?.current?.setFieldValue('address', formData?.address);
                secondRegisterRef?.current?.setFieldValue('street', formData?.street);
                secondRegisterRef?.current?.setFieldValue('zipcode', formData?.zipcode);
            }

        }, 100);
    }

    console.log("formData", formData);


    const renderText = formSteps == 0 ? "Provide the details below" : `Enter the 6-digit code sent to  you at`

    return (
        <div>
            <div className='register-main-wrapper'>
                <div className='register-main-wrapper-left'>
                    <div className='my-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>Empowering Health Innovators to Transform Lives</div>
                    <div className='my-3 regular-font font-size2 font-color2 fw-normal'>Join the movement to revolutionize wellness</div>
                    <div className='register-main-wrapper-flex'>
                        {
                            registerPageConstant?.map((r, index) => {
                                return (
                                    <div className='register-main-wrapper-flex-inner' key={index}>
                                        <div><img src={r?.image} /></div>
                                        <div className='regular-font font-size3 font-color2 fw-normal' style={{ fontSize: "14px" }}>{r?.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='regular-font font-size3 font-color2 fw-bold' style={{ margin: "40px 0" }}>We believe mental health is a journey, and every journey deserves personalized guidance.</div>
                </div>
                <div className='register-main-wrapper-right'>
                    {formSteps !== 5 && <TabBar
                        selectedTab={tabBar}
                        onClickTabBar={onClickTabBar}
                        options={tabBarOptions}
                    />}
                    <div className='register-main-wrapper-right-inner'>
                        {formSteps != 0 && formSteps != 5 && <div
                            onClick={onClickBackIcon}
                            style={{ width: "fit-content", textAlign: "center", cursor: "pointer", color: "blue", borderBottom: "1px solid blue", margin: "auto" }}><IoMdArrowBack style={{ marginRight: "5px", marginTop: "-3px" }} />Back</div>}
                        {formSteps != 5 && <div className='register-create-account'>Create an account as a {detailsOfSelectedTab?.title}</div>}
                        {formSteps != 5 && <div className='register-create-account-inner
                    mb-3'>{renderText} {formSteps != 0 && (tabBar?.isCustomer ? true : formSteps != 1) && <b style={{ color: "black" }}>{formData?.email}</b>}</div>}
                        {renderComponant()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register