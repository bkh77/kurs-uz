import axios from "axios";

export const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== "api/apiCall") {
      next(action);
      return;
    }

    next(action);

    const { url, method, data, onSuccess, onFail } = action.payload;

    axios({
      baseURL: "http://valyuta-kurslari.uz/api/",
      url,
      method,
      data,
    })
      .then((res) => {
        dispatch({
          type: onSuccess,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: onFail,
          payload: err.data,
        });
      });
  };
