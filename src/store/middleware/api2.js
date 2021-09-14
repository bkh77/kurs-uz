import axios from "axios";

export const api2 =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== "api/historyRate") {
      next(action);
      return;
    }

    next(action);

    const { url, method, data, onSuccess, onFail } = action.payload;


    axios({
      baseURL: "https://cbu.uz/oz/arkhiv-kursov-valyut/json/",
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
