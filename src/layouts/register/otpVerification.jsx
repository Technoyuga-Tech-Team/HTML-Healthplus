import ButtonComp from "@/componant/ButtonComp/ButtonComp";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OtpVarificatiion({ onClick, loader }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(60);
    const [disable1, setDisable1] = useState(false);
    const [allValuesFilledforrideOTP, setAllValuesFilledforrideOTP] = useState(false);
    const [confirmatioObject, setConfirmationObject] = useState(null)
    const [otpLoader, setOptpLoader] = useState(false)

    const handleOtpChange = (index, value) => {
        if (value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        // Focus on the next input box
        if (value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        const otpLength = 6;
        const pastedValue = e.clipboardData.getData('text');
        if (pastedValue.length === otpLength) {
            const newOtp = pastedValue.split('');
            newOtp.forEach((value, index) => {
                if (index < otpLength) {
                    inputRefs.current[index].value = value;
                    handleOtpChange(index, value);
                }
            });
            setOtp(newOtp);
        }
    };

    const handleResendClick = async () => {
        // if (timer === 0) {
        //     setOptpLoader(true)
        //     await AddCaptchaElement()
        //     const otpSendResponse = await sendOtpForMobileNumber(userObject?.fireFormat)
        //     if (otpSendResponse?.success) {
        //         await deleteAddCaptchaElement()
        //         displaySuccessToast(otpSendResponse?.message)
        //         setConfirmationObject(otpSendResponse?.data)
        //         setOtp(['', '', '', '', '', ''])
        //         setTimer(60)
        //     } else {
        //         await deleteAddCaptchaElement()
        //         displayErrorToast(otpSendResponse?.message)
        //     }
        //     setOptpLoader(false)
        // }
    };

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            setIsButtonDisabled(false);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        if (timer === 0) {
            setIsButtonDisabled(true);
        }
    }, [timer, isButtonDisabled]);

    useEffect(() => {
        const isFilledOtp = otp.every(value => value !== '');
        setAllValuesFilledforrideOTP(isFilledOtp);
    }, [otp]);

    const onSubmitData = async (e) => {
        e.preventDefault()
        // if (allValuesFilledforrideOTP) {
        //     if (timer === 0) {
        //         displayErrorToast("Invalid verification code. Please check and try again.")
        //     } else {
        //         setDisable1(true)
        //         const stringResult = otp.join("");
        //         const finalData = await confirmOtpMobileNumber(confirmatioObject || otpVarificationObject, stringResult)
        //         if (finalData?.success) {
        //             if (resetPassword) {
        //                 resetPassword(userObject?.uid || finalData?.data?.user?.uid)
        //             } else {
        //                 const rest = {
        //                     ...userObject,
        //                     uid: finalData?.data?.user?.uid
        //                 };
        //                 setDataInOtpVerifications(rest)
        //                 // const addDataInfirebase = await addRegisterUserDataInFirestore(rest)
        //                 // if (addDataInfirebase?.success) {
        //                 //     displaySuccessToast(addDataInfirebase?.message)
        //                 //     navigation(navigationConst?.login)
        //                 // } else {
        //                 //     displayErrorToast(addDataInfirebase?.message)
        //                 // }
        //             }
        //         } else {
        //             displayErrorToast(finalData?.message)
        //         }
        //         setDisable1(false)
        //     }
        // }
        // else {
        //     displayErrorToast("Please fill otp")
        // }
    }

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        if (!/^\d$|^\s$/.test(keyValue)) {
            event.preventDefault();
        }
    }

    return (
        <>
            <div>
                <div className="mb-2">
                    <form className="row" onSubmit={(e) => onSubmitData(e)}>
                        <fieldset disabled={otpLoader || disable1}>
                            <div className="col col-12 col-md-12">
                                <div className="hh-sign-up-otp">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            className="form-control"
                                            maxLength="1"
                                            onKeyPress={handleKeyPress}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onPaste={handlePaste}
                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="col col-12">
                                <div className="hh-otp-resend-btn  mt-4">
                                    <button type="button" onClick={handleResendClick} disabled={!isButtonDisabled} className="btn btn-light" style={{ cursor: timer === 0 && "pointer" }}>
                                        {otpLoader ? "Loading..." :
                                            <>
                                                {timer === 0 ? "Resend otp" : "I didn’t receive a code"}
                                                {' '}({Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60})
                                            </>
                                        }
                                    </button>
                                </div>
                            </div>
                            <br />
                        </fieldset>

                        <div className="col col-12">
                            <ButtonComp
                                loader={loader}
                                disabled={otp.join("")?.length != 6}
                                onClick={() => onClick(otp.join(""))}
                                text="Continue" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default OtpVarificatiion