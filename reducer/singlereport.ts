/** @format */
export const SET_SINGLE_REPORT = "SET_SINGLE_REPORT";


export const SETSINGLEREPORT = (data:any) => {
  return {
    type: SET_SINGLE_REPORT,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_REPORT:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
