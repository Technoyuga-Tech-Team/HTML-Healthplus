import { errorHandlerFunctionCatchBlock } from "./ErrorHandler";
import { api_services } from "./httpClient";

export const contactUsApi = async (data) => {
    try {
        const response = await api_services.post("/user/contact-us", data);
        return response.data;
    } catch (err) {
        const data = await errorHandlerFunctionCatchBlock(err);
        return data;
    }
};