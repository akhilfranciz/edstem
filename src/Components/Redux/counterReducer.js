// Reducer
const initialState = {
  course: "",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COURSE":
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
