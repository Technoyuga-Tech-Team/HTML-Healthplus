import { errorHandlerFunctionCatchBlock } from "./ErrorHandler";
import { api_services } from "./httpClient";

export const registerApi = async (data) => {
    try {
        const getListOfSer = await api_services.post("/user/send-otp-with-signup", data);
        return getListOfSer.data;
    } catch (err) {
        const data = await errorHandlerFunctionCatchBlock(err);
        return data;
    }
};