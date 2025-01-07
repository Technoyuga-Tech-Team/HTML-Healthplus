import { errorHandlerFunctionCatchBlock } from "./ErrorHandler";
import { api_services } from "./httpClient";

export const sendOtpWithSignup = async (data) => {
    try {
        const getListOfSer = await api_services.post("/user/send-otp-with-signup", data);
        return getListOfSer.data;
    } catch (err) {
        const data = await errorHandlerFunctionCatchBlock(err);
        return data;
    }
};

export const verifyOtpWithSignup = async (data) => {
    try {
        const getListOfSer = await api_services.post("/user/verify-otp-with-signup", data);
        return getListOfSer.data;
    } catch (err) {
        const data = await errorHandlerFunctionCatchBlock(err);
        return data;
    }
};