// cancelToken.js
import axios from 'axios';

const cancelTokens = {};


export const getCancelToken = (endpoint) => {
    if (cancelTokens[endpoint]) {
        cancelTokens[endpoint].cancel(`Operation canceled due to a new request for ${endpoint}.`);
    }

    cancelTokens[endpoint] = axios.CancelToken.source();
    return cancelTokens[endpoint].token;
};

export const cancelOngoingRequest = (endpoint) => {
    if (cancelTokens[endpoint]) {
        cancelTokens[endpoint].cancel(`Component unmounted or URL changed for ${endpoint}.`);
        delete cancelTokens[endpoint];
    }
};