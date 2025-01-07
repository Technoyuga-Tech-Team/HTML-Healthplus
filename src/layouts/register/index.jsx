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
        if ((formSteps == 0 && tabBar?.isCustomer) || (formSteps == 1 && !tabBar?.isCustomer)) {
            await sendOtpAPI({ email: data.email  || formData?.email})
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
            } else {
                displayErrorToast(response.message)
            }

        }
        setLoader(false)
        setFormSteps(5)
    }


    const onClickTabBar = (id) => {
        setTabBar(id)
        setFormSteps(0)
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
            <div style={{ textAlign: "center" }}>
                <div className='my-3'> <MdOutlineVerified size={40} color='green' /></div>
                Account created successfully
            </div>
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

    const renderText = formSteps == 0 ? "Provide the details below" : "Enter the 6-digit code sent to  you at"
    console.log("secondReisterRegf ----------------");

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
                    <TabBar
                        selectedTab={tabBar}
                        onClickTabBar={onClickTabBar}
                        options={tabBarOptions}
                    />
                    <div className='register-main-wrapper-right-inner'>
                        <div className='register-create-account'>Create an account as a {detailsOfSelectedTab?.title}</div>
                        <div className='register-create-account-inner
                    mb-3'>{renderText}</div>
                        {renderComponant()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register