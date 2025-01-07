import { errorHandlerFunctionCatchBlock } from "./ErrorHandler";
import { api_services } from "./httpClient";

export const getLanguageApi = async (data) => {
    try {
        const getListOfSer = await api_services.post("/user/get-language-list-with-pagination", data);
        return getListOfSer.data;
    } catch (err) {
        const data = await errorHandlerFunctionCatchBlock(err);
        return data;
    }
};