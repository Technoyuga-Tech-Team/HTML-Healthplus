import ButtonComp from "@/componant/ButtonComp/ButtonComp";
import { sendOtpWithSignup } from "@/services/authentication";
import { displayErrorToast, displaySuccessToast } from "@/utils/displayToasts";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OtpVarificatiion({ onClick, loader, formData }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(60);
    const [disable1, setDisable1] = useState(false);
    const [otpLoader, setOtpLoader] = useState(false)

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
        setOtpLoader(true)
        const response = await sendOtpWithSignup({ email: formData?.email })
        if (response?.success) {
            setOtp(['', '', '', '', '', ''])
            setTimer(60)
            displaySuccessToast(response.message)
        } else {
            displayErrorToast(response.message)
        }
        setOtpLoader(false)
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


    const onSubmitData = async (e) => {
        e.preventDefault()
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