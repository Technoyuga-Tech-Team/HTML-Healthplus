export const errorHandlerFunctionCatchBlock = async (data) => {

  if (data?.code == "ERR_CANCELED") {
    return {
      success: false,
      code: data?.code,
    };
  }
  //  network error
  if (!data.response) {
    return {
      success: false,
      message: data?.message,
    };
  }

  // server error
  if (data.response && data.response.data) {
    return {
      success: false,
      message: data?.response?.data?.message || data?.message,
    };
  }
};
