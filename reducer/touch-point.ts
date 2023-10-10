/** @format */
export const SET_TOOUCHPOINT = "SET_TOOUCHPOINT";


export const SETTOUCHPOINT = (data:any) => {
  return {
    type: SET_TOOUCHPOINT,
    payload: data,
  };
};



const initialState:any = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOOUCHPOINT:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
