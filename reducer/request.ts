/** @format */
export const SET_REQUEST_DEMO = "SET_REQUEST_DEMO";


export const SETREQUESTDEMO = (data:any) => {
  return {
    type: SET_REQUEST_DEMO,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REQUEST_DEMO:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
