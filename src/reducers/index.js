const initialState = {
  loading: false,
  message: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA_PENDING":
      return {
        loading: true
      };
      break;
    case "ADD_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: ""
      };
      break;
    case "ADD_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        message: [],
        error: action.payload
      };
      break;
    default:
      return state;
  }
};

export default reducer;
