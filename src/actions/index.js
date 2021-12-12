import axios from "axios";

export const addDataPending = () => {
  return {
    type: "ADD_DATA_PENDING"
  };
};

export const addDataSuccess = (message) => {
  return {
    type: "ADD_DATA_SUCCESS",
    payload: message
  };
};

export const addDataFailure = (error) => {
  return {
    type: "ADD_DATA_FAILURE",
    payload: error
  };
};

export const addActionData = async () => {
  return async (dispatch) => {
    console.log("hello dispatch");
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("hello check" + res.data);
      });
  };
};
