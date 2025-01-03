import FormComponent from '@/componant/formComp/FormComp'
import { registerAsCustomerValidationSchema, registerCustomerInitialValue } from '@/utils/validationSchema'
import React, { useRef, useState } from 'react'
import "./index.css"
import { registerPageConstant, tabBarOptions } from '@/constant/staticData'
import TabBar from '@/componant/tabBar/TabBar'
const Register = () => {

    const registerRef = useRef()
    const [loader, setLoader] = useState(false)
    const [tabBar, setTabBar] = useState(tabBarOptions[0]?.id)

    const onSubmitFormData = async (values) => {
        // const finalFormData = {
        //     name: values.name,
        //     university: values.universityName?.value,
        //     universityEmail: values.universityEmail,
        //     email: values.email,
        //     phoneNumber: values.phoneNumberLatest,
        //     countryCode: values.countryCodeMain,
        //     address: {
        //         state: values.state,
        //         city: values.city
        //     },
        //     password: location?.state?.email ? undefined : values.password,
        //     registerType: location?.state?.email ? registerTypeConst?.google : registerTypeConst?.normal,
        //     role: activeTab !== registerOptionsData[0].key ? userTypesConst?.student : userTypesConst?.investor,
        //     socialId: location?.state?.socialId
        // };

        // const formData = addFormDataInValidationForObject(finalFormData)
        // setLoader(true)

        // const response = await registerUserApiCall(formData)
        // responseHandler(response, setResponseDataApi, setLoader)
    };

    const onClickTabBar = (id) => {
        setTabBar(id)
    }

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
                        <div className='register-create-account'>Create an account as a customer</div>
                        <div className='register-create-account-inner
                    mb-3'>Provide the details below</div>
                        <FormComponent
                            width={"80%"}
                            initialValues={registerCustomerInitialValue}
                            validationSchema={registerAsCustomerValidationSchema}
                            handleSubmit={(val) => onSubmitFormData(val)}
                            buttonText={"Sign up"}
                            loader={loader}
                            ref={registerRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register