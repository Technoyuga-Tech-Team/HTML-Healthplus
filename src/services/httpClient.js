import axios from "axios";
import { getCancelToken } from "./cancelToken";

export const api_services = axios.create({
  baseURL: "http://localhost:5001/api",
});

const getToken = () => {
  const token = localStorage.getItem("IN_ADMIN_TOKEN");
  return `Bearer ${token}`;
};

const urlToAddCancelToken = [

];

api_services.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    if (urlToAddCancelToken?.includes(config.url) && config?.data?.cancel != true) {
      config.cancelToken = getCancelToken(config.url);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api_services.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
